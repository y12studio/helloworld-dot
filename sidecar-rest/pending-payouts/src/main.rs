use subsidecar::{apis, models};
use subsidecar::apis::configuration::Configuration;
use subsidecar::apis::staking_api::GetStakingPayoutsByAccountIdError;
use clap::Clap;

// https://wiki.polkadot.network/docs/en/learn-DOT
const KSM_UNIT: u128 = 1_000_000_000_000;

#[derive(Clap)]
#[clap(version = "0.0.1", author = "y12studio@gmail.com")]
struct Opts {
    #[clap(short, long)]
    account: String,

    #[clap(short, long)]
    depth: String,

    #[clap(short, long)]
    era: String,
}

async fn get_pending_payouts(account_id: String, depth: String , era: String) -> Result<u128, apis::Error<GetStakingPayoutsByAccountIdError>>{
    let mut conf = Configuration::default();
    conf.base_path =  "http://localhost:8080".to_owned();
    let unclaimed_only = "true";
    let r: models::AccountStakingPayouts = apis::staking_api::get_staking_payouts_by_account_id(
        &conf,
        &account_id,
        Some(&depth),
        Some(&era),
        Some(unclaimed_only),
    ).await?;
    // println!("{:?}", r.eras_payouts);
    let mut total_payout: u128 = 0;
    for erapayout in r.eras_payouts.unwrap() {
        let payouts = erapayout.payouts.unwrap();
        if payouts.len() > 0 {
            // println!("{:?}", payouts);
            for payout in payouts {
                let payout_obj = payout.as_object().unwrap();
                // println!("{:?}", payout);
                let claimed = payout_obj.get("claimed").unwrap().as_bool().unwrap();
                if !claimed {
                    let payout_str = payout_obj.get("nominatorStakingPayout").unwrap().as_str().unwrap();
                    let i: u128 = payout_str.parse::<u128>().unwrap();
                    // println!("{:?}", i);
                    total_payout += i;                
                }
            }
        }
    }
    println!("{:?}", total_payout);
    Ok(total_payout)
}

#[tokio::main]
async fn main() ->  Result<(), apis::Error<GetStakingPayoutsByAccountIdError>> {
    let opts: Opts = Opts::parse();
    println!("account_id: {}", opts.account);
    println!("depth: {}", opts.depth);
    println!("era: {}", opts.era);
    let payout: u128 = get_pending_payouts(opts.account, opts.depth, opts.era).await?;
    println!("pending payout(Planck): {}", payout);
    println!("pending payout(KSM): {:.12}", payout as f64/KSM_UNIT as f64);
    Ok(())
}
