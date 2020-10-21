#![cfg_attr(not(feature = "std"), no_std)]

/// Edit this file to define custom logic or remove it if it is not needed.
/// Learn more about FRAME and the core library of Substrate FRAME pallets:
/// https://substrate.dev/docs/en/knowledgebase/runtime/frame

use frame_support::{decl_module, decl_storage, decl_event, decl_error, dispatch, traits::Get};
use frame_system::ensure_signed;

use sp_runtime::{ traits::StaticLookup, DispatchError, DispatchResult };

#[cfg(test)]
mod mock;

#[cfg(test)]
mod tests;

/// Configure the pallet by specifying the parameters and types on which it depends.
pub trait Trait: frame_system::Trait + orml_nft::Trait {
	/// Because this pallet emits events, it depends on the runtime's definition of an event.
	type Event: From<Event<Self>> + Into<<Self as frame_system::Trait>::Event>;
}

// The pallet's runtime storage items.
// https://substrate.dev/docs/en/knowledgebase/runtime/storage
decl_storage! {
	// A unique name is used to ensure that the pallet's storage items are isolated.
	// This name may be updated, but each pallet in the runtime must use a unique name.
	// ---------------------------------vvvvvvvvvvvvvv
	trait Store for Module<T: Trait> as TemplateModule {
		// Learn more about declaring storage items:
		// https://substrate.dev/docs/en/knowledgebase/runtime/storage#declaring-storage-items
		Something get(fn something): Option<u32>;
	}
}

// Pallets use events to inform users when important changes are made.
// https://substrate.dev/docs/en/knowledgebase/runtime/events
decl_event!(
	pub enum Event<T> where 
		AccountId = <T as frame_system::Trait>::AccountId, 
		ClassId = <T as orml_nft::Trait>::ClassId,
		TokenId = <T as orml_nft::Trait>::TokenId {
		/// Event documentation should end with an array that provides descriptive names for event
		/// parameters. [something, who]
		SomethingStored(u32, AccountId),
		OrmlNftClassCreated(AccountId, ClassId),
		OrmlNftTokenMinted(AccountId, TokenId),
		OrmlNftTokenTransferred(AccountId, AccountId, ClassId, TokenId),
	}
);

// Errors inform users that something went wrong.
decl_error! {
	pub enum Error for Module<T: Trait> {
		/// Error names should be descriptive.
		NoneValue,
		/// Errors should have helpful documentation associated with them.
		StorageOverflow,
	}
}

// Dispatchable functions allows users to interact with the pallet and invoke state changes.
// These functions materialize as "extrinsics", which are often compared to transactions.
// Dispatchable functions must be annotated with a weight and must return a DispatchResult.
decl_module! {
	pub struct Module<T: Trait> for enum Call where origin: T::Origin {
		// Errors must be initialized if they are used by the pallet.
		type Error = Error<T>;

		// Events must be initialized if they are used by the pallet.
		fn deposit_event() = default;

		/// An example dispatchable that takes a singles value as a parameter, writes the value to
		/// storage and emits an event. This function must be dispatched by a signed extrinsic.
		#[weight = 10_000 + T::DbWeight::get().writes(1)]
		pub fn do_something(origin, something: u32) -> dispatch::DispatchResult {
			// Check that the extrinsic was signed and get the signer.
			// This function will return an error if the extrinsic is not signed.
			// https://substrate.dev/docs/en/knowledgebase/runtime/origin
			let who = ensure_signed(origin)?;

			// Update storage.
			Something::put(something);

			// Emit an event.
			Self::deposit_event(RawEvent::SomethingStored(something, who));
			// Return a successful DispatchResult
			Ok(())
		}

		// 
		// "CID": "Vec<u8>"
		// https://github.com/open-web3-stack/open-runtime-module-library/blob/f278c766d8bcc36b94c0e0c63d1205a4e5351841/nft/src/lib.rs#L34
		// 
		// "ClassData": "u32"
		// "TokenData": "u32"
		// https://github.com/open-web3-stack/open-runtime-module-library/blob/f278c766d8bcc36b94c0e0c63d1205a4e5351841/nft/src/lib.rs#L66
		// 
		// "ClassId": "u64"
		// "TokenId": "u64"
		// https://github.com/open-web3-stack/open-runtime-module-library/blob/f278c766d8bcc36b94c0e0c63d1205a4e5351841/nft/src/lib.rs#L62
		#[weight = 10_000 + T::DbWeight::get().reads_writes(1,1)]
		pub fn create_nft_class(origin, class_metadata: orml_nft::CID, class_data : <T as orml_nft::Trait>::ClassData) -> dispatch::DispatchResult {
			let who = ensure_signed(origin)?;
			let r: Result<T::ClassId, DispatchError> = orml_nft::Module::<T>::create_class(&who, class_metadata, class_data);
			Self::deposit_event(RawEvent::OrmlNftClassCreated(who, r.unwrap()));
			Ok(())
		}

		#[weight = 10_000 + T::DbWeight::get().reads_writes(1,1)]
		pub fn mint_nft_token(origin, class_id: T::ClassId, metadata: orml_nft::CID, data: <T as orml_nft::Trait>::TokenData) -> dispatch::DispatchResult {
			let who = ensure_signed(origin)?;
			let r: Result<T::TokenId, DispatchError> = orml_nft::Module::<T>::mint(&who, class_id, metadata, data);
			Self::deposit_event(RawEvent::OrmlNftTokenMinted(who, r.unwrap()));
			Ok(())
		}
		
		#[weight = 10_000 + T::DbWeight::get().reads_writes(1,1)]
		pub fn nft_transfer(origin, dest: <T::Lookup as StaticLookup>::Source, token_class_id: T::ClassId, token_id: T::TokenId) -> DispatchResult {
			let who = ensure_signed(origin)?;
			let to: T::AccountId = T::Lookup::lookup(dest)?;
			let _r = orml_nft::Module::<T>::transfer(&who, &to, (token_class_id, token_id));
			Self::deposit_event(RawEvent::OrmlNftTokenTransferred(who, to, token_class_id, token_id));
			Ok(())
		}

		/// An example dispatchable that may throw a custom error.
		#[weight = 10_000 + T::DbWeight::get().reads_writes(1,1)]
		pub fn cause_error(origin) -> dispatch::DispatchResult {
			let _who = ensure_signed(origin)?;

			// Read a value from storage.
			match Something::get() {
				// Return an error if the value has not been set.
				None => Err(Error::<T>::NoneValue)?,
				Some(old) => {
					// Increment the value read from storage; will error in the event of overflow.
					let new = old.checked_add(1).ok_or(Error::<T>::StorageOverflow)?;
					// Update the value in storage with the incremented result.
					Something::put(new);
					Ok(())
				},
			}
		}
	}
}
