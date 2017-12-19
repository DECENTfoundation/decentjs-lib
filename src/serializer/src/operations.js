import types from "./types";
import SerializerImpl from "./serializer";

var {
    //id_type,
    //varint32,
    int8, uint8, uint16, uint32, int64, uint64,
    string, bytes, bool, array, fixed_array,
    protocol_id_type, object_id_type, vote_id,
    future_extensions,
    static_variant, map, set,
    public_key, address,
    time_point_sec,
    optional,
} = types;

future_extensions = types.void;

/*
When updating generated code
Replace:  operation = static_variant [
with:     operation.st_operations = [

Delete:
public_key = new Serializer(
    "public_key"
    key_data: bytes 33
)

*/
// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
var operation = static_variant();
// module.exports["operation"] = operation;

export { operation };
// For module.exports
var Serializer = function(operation_name, serilization_types_object){
    return new SerializerImpl(operation_name, serilization_types_object);
    // return module.exports[operation_name] = s;
}

// Custom-types follow Generated code:

// ##  Generated code follows
// # programs/js_operation_serializer > npm i -g decaffeinate
// ## -------------------------------

export const transfer_operation_fee_parameters = new Serializer( 
    "transfer_operation_fee_parameters",
    {fee: uint64}
);

export const account_create_operation_fee_parameters = new Serializer( 
    "account_create_operation_fee_parameters",
    {basic_fee: uint64}
);

export const account_update_operation_fee_parameters = new Serializer( 
    "account_update_operation_fee_parameters",
    {fee: int64}
);

export const asset_create_operation_fee_parameters = new Serializer( 
    "asset_create_operation_fee_parameters",
    {basic_fee: uint64}
);

export const asset_update_operation_fee_parameters = new Serializer( 
    "asset_update_operation_fee_parameters",
    {basic_fee: uint64}
);

export const asset_publish_feed_operation_fee_parameters = new Serializer( 
    "asset_publish_feed_operation_fee_parameters",
    {fee: uint64}
);

export const witness_create_operation_fee_parameters = new Serializer( 
    "witness_create_operation_fee_parameters",
    {fee: uint64}
);

export const witness_update_operation_fee_parameters = new Serializer( 
    "witness_update_operation_fee_parameters",
    {fee: int64}
);

export const witness_update_global_parameters_operation_fee_parameters = new Serializer( 
    "witness_update_global_parameters_operation_fee_parameters",
    {fee: uint64}
);

export const proposal_create_operation_fee_parameters = new Serializer( 
    "proposal_create_operation_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
}
);

export const proposal_update_operation_fee_parameters = new Serializer( 
    "proposal_update_operation_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
}
);

export const proposal_delete_operation_fee_parameters = new Serializer( 
    "proposal_delete_operation_fee_parameters",
    {fee: uint64}
);

export const withdraw_permission_create_operation_fee_parameters = new Serializer( 
    "withdraw_permission_create_operation_fee_parameters",
    {fee: uint64}
);

export const withdraw_permission_update_operation_fee_parameters = new Serializer( 
    "withdraw_permission_update_operation_fee_parameters",
    {fee: uint64}
);

export const withdraw_permission_claim_operation_fee_parameters = new Serializer( 
    "withdraw_permission_claim_operation_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
}
);

export const withdraw_permission_delete_operation_fee_parameters = new Serializer( 
    "withdraw_permission_delete_operation_fee_parameters",
    {fee: uint64}
);

export const vesting_balance_create_operation_fee_parameters = new Serializer( 
    "vesting_balance_create_operation_fee_parameters",
    {fee: uint64}
);

export const vesting_balance_withdraw_operation_fee_parameters = new Serializer( 
    "vesting_balance_withdraw_operation_fee_parameters",
    {fee: uint64}
);

export const custom_operation_fee_parameters = new Serializer( 
    "custom_operation_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
}
);

export const assert_operation_fee_parameters = new Serializer( 
    "assert_operation_fee_parameters",
    {fee: uint64}
);

export const content_submit_operation_fee_parameters = new Serializer( 
    "content_submit_operation_fee_parameters",
    {fee: uint64}
);

export const request_to_buy_operation_fee_parameters = new Serializer( 
    "request_to_buy_operation_fee_parameters",
    {fee: uint64}
);

export const leave_rating_and_comment_operation_fee_parameters = new Serializer( 
    "leave_rating_and_comment_operation_fee_parameters",
    {fee: uint64}
);

export const ready_to_publish_operation_fee_parameters = new Serializer( 
    "ready_to_publish_operation_fee_parameters",
    {fee: uint64}
);

export const proof_of_custody_operation_fee_parameters = new Serializer( 
    "proof_of_custody_operation_fee_parameters",
    {fee: uint64}
);

export const deliver_keys_operation_fee_parameters = new Serializer( 
    "deliver_keys_operation_fee_parameters",
    {fee: uint64}
);

export const subscribe_operation_fee_parameters = new Serializer( 
    "subscribe_operation_fee_parameters",
    {fee: uint64}
);

export const subscribe_by_author_operation_fee_parameters = new Serializer( 
    "subscribe_by_author_operation_fee_parameters",
    {fee: uint64}
);

export const automatic_renewal_of_subscription_operation_fee_parameters = new Serializer( 
    "automatic_renewal_of_subscription_operation_fee_parameters",
    {fee: uint64}
);

export const report_stats_operation_fee_parameters = new Serializer( 
    "report_stats_operation_fee_parameters",
    {fee: uint64}
);

export const set_publishing_manager_operation_fee_parameters = new Serializer( 
    "set_publishing_manager_operation_fee_parameters",
    {fee: uint64}
);

export const set_publishing_right_operation_fee_parameters = new Serializer( 
    "set_publishing_right_operation_fee_parameters",
    {fee: uint64}
);

export const content_cancellation_operation_fee_parameters = new Serializer( 
    "content_cancellation_operation_fee_parameters",
    {fee: uint64}
);

export const disallow_automatic_renewal_of_subscription_operation_fee_parameters = new Serializer( 
    "disallow_automatic_renewal_of_subscription_operation_fee_parameters",
    {fee: uint64}
);

export const return_escrow_submission_operation_fee_parameters = new Serializer( 
    "return_escrow_submission_operation_fee_parameters",
    {fee: uint64}
);

export const return_escrow_buying_operation_fee_parameters = new Serializer( 
    "return_escrow_buying_operation_fee_parameters",
    {fee: uint64}
);

export const pay_seeder_operation_fee_parameters = new Serializer( 
    "pay_seeder_operation_fee_parameters",
    {fee: uint64}
);

export const finish_buying_operation_fee_parameters = new Serializer( 
    "finish_buying_operation_fee_parameters",
    {fee: uint64}
);

export const renewal_of_subscription_operation_fee_parameters = new Serializer( 
    "renewal_of_subscription_operation_fee_parameters",
    {fee: uint64}
);

let fee_parameters = static_variant([
    transfer_operation_fee_parameters,    
    account_create_operation_fee_parameters,    
    account_update_operation_fee_parameters,    
    asset_create_operation_fee_parameters,    
    asset_update_operation_fee_parameters,    
    asset_publish_feed_operation_fee_parameters,    
    witness_create_operation_fee_parameters,    
    witness_update_operation_fee_parameters,    
    witness_update_global_parameters_operation_fee_parameters,    
    proposal_create_operation_fee_parameters,    
    proposal_update_operation_fee_parameters,    
    proposal_delete_operation_fee_parameters,    
    withdraw_permission_create_operation_fee_parameters,    
    withdraw_permission_update_operation_fee_parameters,    
    withdraw_permission_claim_operation_fee_parameters,    
    withdraw_permission_delete_operation_fee_parameters,    
    vesting_balance_create_operation_fee_parameters,    
    vesting_balance_withdraw_operation_fee_parameters,    
    custom_operation_fee_parameters,    
    assert_operation_fee_parameters,    
    content_submit_operation_fee_parameters,    
    request_to_buy_operation_fee_parameters,    
    leave_rating_and_comment_operation_fee_parameters,    
    ready_to_publish_operation_fee_parameters,    
    proof_of_custody_operation_fee_parameters,    
    deliver_keys_operation_fee_parameters,    
    subscribe_operation_fee_parameters,    
    subscribe_by_author_operation_fee_parameters,    
    automatic_renewal_of_subscription_operation_fee_parameters,    
    report_stats_operation_fee_parameters,    
    set_publishing_manager_operation_fee_parameters,    
    set_publishing_right_operation_fee_parameters,    
    content_cancellation_operation_fee_parameters,    
    disallow_automatic_renewal_of_subscription_operation_fee_parameters,    
    return_escrow_submission_operation_fee_parameters,    
    return_escrow_buying_operation_fee_parameters,    
    pay_seeder_operation_fee_parameters,    
    finish_buying_operation_fee_parameters,    
    renewal_of_subscription_operation_fee_parameters
]);

export const fee_schedule = new Serializer( 
    "fee_schedule", {
    parameters: set(fee_parameters),
    scale: uint32
}
);

export const void_result = new Serializer( 
    "void_result"
);

export const asset = new Serializer( 
    "asset", {
    amount: int64,
    asset_id: protocol_id_type("asset")
}
);

let operation_result = static_variant([
    void_result,    
    object_id_type,    
    asset
]);

export const processed_transaction = new Serializer( 
    "processed_transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65)),
    operation_results: array(operation_result)
}
);

export const signed_block = new Serializer( 
    "signed_block", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: protocol_id_type("witness"),
    transaction_merkle_root: bytes(20),
    extensions: set(future_extensions),
    witness_signature: bytes(65),
    transactions: array(processed_transaction)
}
);

export const block_header = new Serializer( 
    "block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: protocol_id_type("witness"),
    transaction_merkle_root: bytes(20),
    extensions: set(future_extensions)
}
);

export const signed_block_header = new Serializer( 
    "signed_block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: protocol_id_type("witness"),
    transaction_merkle_root: bytes(20),
    extensions: set(future_extensions),
    witness_signature: bytes(65)
}
);


export const memo_data = new Serializer( 
    "memo_data", {
    from: public_key,
    to: public_key,
    nonce: uint64,
    message: bytes()
}
);

export const transfer = new Serializer( 
    "transfer", {
    fee: asset,
    from: protocol_id_type("account"),
    to: protocol_id_type("account"),
    amount: asset,
    memo: optional(memo_data),
    extensions: set(future_extensions)
}
);

export const authority = new Serializer( 
    "authority", {
    weight_threshold: uint32,
    account_auths: map((protocol_id_type("account")), (uint16)),
    key_auths: map((public_key), (uint16))
}
);

export const account_options = new Serializer( 
    "account_options", {
    memo_key: public_key,
    voting_account: protocol_id_type("account"),
    num_witness: uint16,
    votes: set(vote_id),
    extensions: set(future_extensions),
    allow_subscription: bool,
    price_per_subscribe: asset,
    subscription_period: uint32
}
);

export const account_create = new Serializer( 
    "account_create", {
    fee: asset,
    registrar: protocol_id_type("account"),
    name: string,
    owner: authority,
    active: authority,
    options: account_options,
    extensions: set(future_extensions)
}
);

export const account_update = new Serializer( 
    "account_update", {
    fee: asset,
    account: protocol_id_type("account"),
    owner: optional(authority),
    active: optional(authority),
    new_options: optional(account_options),
    extensions: set(future_extensions)
}
);

export const asset_create = new Serializer( 
    "asset_create", {
    fee: asset,
    issuer: protocol_id_type("account"),
    symbol: string,
    precision: uint8,
    description: string,
    max_supply: int64,
    feed_lifetime_sec: uint32,
    minimum_feeds: uint8,
    extensions: set(future_extensions)
}
);

export const asset_update = new Serializer( 
    "asset_update", {
    fee: asset,
    issuer: protocol_id_type("account"),
    asset_to_update: protocol_id_type("asset"),
    new_issuer: optional(protocol_id_type("account")),
    new_description: string,
    new_feed_lifetime_sec: uint32,
    new_minimum_feeds: uint8,
    max_supply: int64,
    extensions: set(future_extensions)
}
);

export const price = new Serializer( 
    "price", {
    base: asset,
    quote: asset
}
);

export const price_feed = new Serializer( 
    "price_feed",
    {core_exchange_rate: price}
);

export const asset_publish_feed = new Serializer( 
    "asset_publish_feed", {
    fee: asset,
    publisher: protocol_id_type("account"),
    asset_id: protocol_id_type("asset"),
    feed: price_feed,
    extensions: set(future_extensions)
}
);

export const witness_create = new Serializer( 
    "witness_create", {
    fee: asset,
    witness_account: protocol_id_type("account"),
    url: string,
    block_signing_key: public_key
}
);

export const witness_update = new Serializer( 
    "witness_update", {
    fee: asset,
    witness: protocol_id_type("witness"),
    witness_account: protocol_id_type("account"),
    new_url: optional(string),
    new_signing_key: optional(public_key)
}
);

export const chain_parameters = new Serializer( 
    "chain_parameters", {
    current_fees: fee_schedule,
    block_interval: uint8,
    maintenance_interval: uint32,
    maintenance_skip_slots: uint8,
    witness_proposal_review_period: uint32,
    maximum_transaction_size: uint32,
    maximum_block_size: uint32,
    maximum_time_until_expiration: uint32,
    maximum_proposal_lifetime: uint32,
    maximum_asset_feed_publishers: uint8,
    maximum_witness_count: uint16,
    maximum_authority_membership: uint16,
    cashback_vesting_period_seconds: uint32,
    cashback_vesting_threshold: int64,
    max_predicate_opcode: uint16,
    fee_liquidation_threshold: int64,
    accounts_per_fee_scale: uint16,
    account_fee_scale_bitshifts: uint8,
    max_authority_depth: uint8,
    extensions: set(future_extensions)
}
);

export const witness_update_global_parameters = new Serializer( 
    "witness_update_global_parameters", {
    fee: asset,
    new_parameters: chain_parameters
}
);

export const op_wrapper = new Serializer( 
    "op_wrapper",
    {op: operation}
);

export const proposal_create = new Serializer( 
    "proposal_create", {
    fee: asset,
    fee_paying_account: protocol_id_type("account"),
    expiration_time: time_point_sec,
    proposed_ops: array(op_wrapper),
    review_period_seconds: optional(uint32),
    extensions: set(future_extensions)
}
);

export const proposal_update = new Serializer( 
    "proposal_update", {
    fee: asset,
    fee_paying_account: protocol_id_type("account"),
    proposal: protocol_id_type("proposal"),
    active_approvals_to_add: set(protocol_id_type("account")),
    active_approvals_to_remove: set(protocol_id_type("account")),
    owner_approvals_to_add: set(protocol_id_type("account")),
    owner_approvals_to_remove: set(protocol_id_type("account")),
    key_approvals_to_add: set(public_key),
    key_approvals_to_remove: set(public_key),
    extensions: set(future_extensions)
}
);

export const proposal_delete = new Serializer( 
    "proposal_delete", {
    fee: asset,
    fee_paying_account: protocol_id_type("account"),
    using_owner_authority: bool,
    proposal: protocol_id_type("proposal"),
    extensions: set(future_extensions)
}
);

export const withdraw_permission_create = new Serializer( 
    "withdraw_permission_create", {
    fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    withdrawal_limit: asset,
    withdrawal_period_sec: uint32,
    periods_until_expiration: uint32,
    period_start_time: time_point_sec
}
);

export const withdraw_permission_update = new Serializer( 
    "withdraw_permission_update", {
    fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    permission_to_update: protocol_id_type("withdraw_permission"),
    withdrawal_limit: asset,
    withdrawal_period_sec: uint32,
    period_start_time: time_point_sec,
    periods_until_expiration: uint32
}
);

export const withdraw_permission_claim = new Serializer( 
    "withdraw_permission_claim", {
    fee: asset,
    withdraw_permission: protocol_id_type("withdraw_permission"),
    withdraw_from_account: protocol_id_type("account"),
    withdraw_to_account: protocol_id_type("account"),
    amount_to_withdraw: asset,
    memo: optional(memo_data)
}
);

export const withdraw_permission_delete = new Serializer( 
    "withdraw_permission_delete", {
    fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    withdrawal_permission: protocol_id_type("withdraw_permission")
}
);

export const linear_vesting_policy_initializer = new Serializer( 
    "linear_vesting_policy_initializer", {
    begin_timestamp: time_point_sec,
    vesting_cliff_seconds: uint32,
    vesting_duration_seconds: uint32
}
);

export const cdd_vesting_policy_initializer = new Serializer( 
    "cdd_vesting_policy_initializer", {
    start_claim: time_point_sec,
    vesting_seconds: uint32
}
);

let vesting_policy_initializer = static_variant([
    linear_vesting_policy_initializer,    
    cdd_vesting_policy_initializer
]);

export const vesting_balance_create = new Serializer( 
    "vesting_balance_create", {
    fee: asset,
    creator: protocol_id_type("account"),
    owner: protocol_id_type("account"),
    amount: asset,
    policy: vesting_policy_initializer
}
);

export const vesting_balance_withdraw = new Serializer( 
    "vesting_balance_withdraw", {
    fee: asset,
    vesting_balance: protocol_id_type("vesting_balance"),
    owner: protocol_id_type("account"),
    amount: asset
}
);

export const custom = new Serializer( 
    "custom", {
    fee: asset,
    payer: protocol_id_type("account"),
    required_auths: set(protocol_id_type("account")),
    id: uint16,
    data: bytes()
}
);

export const account_name_eq_lit_predicate = new Serializer( 
    "account_name_eq_lit_predicate", {
    account_id: protocol_id_type("account"),
    name: string
}
);

export const asset_symbol_eq_lit_predicate = new Serializer( 
    "asset_symbol_eq_lit_predicate", {
    asset_id: protocol_id_type("asset"),
    symbol: string
}
);

export const block_id_predicate = new Serializer( 
    "block_id_predicate",
    {id: bytes(20)}
);

let predicate = static_variant([
    account_name_eq_lit_predicate,    
    asset_symbol_eq_lit_predicate,    
    block_id_predicate
]);

export const assert = new Serializer( 
    "assert", {
    fee: asset,
    fee_paying_account: protocol_id_type("account"),
    predicates: array(predicate),
    required_auths: set(protocol_id_type("account")),
    extensions: set(future_extensions)
}
);

export const regional_price = new Serializer( 
    "regional_price", {
    region: uint32,
    price: asset
}
);

export const DIntegerString = new Serializer( 
    "DIntegerString",
    {s: string}
);

export const CiphertextString = new Serializer( 
    "CiphertextString", {
    C1: DIntegerString,
    D1: DIntegerString
}
);

export const CustodyData = new Serializer( 
    "CustodyData", {
    n: uint32,
    u_seed: fixed_array(16, int8),
    pubKey: bytes(33)
}
);

export const content_submit = new Serializer( 
    "content_submit", {
    fee: asset,
    size: uint64,
    author: protocol_id_type("account"),
    co_authors: map((protocol_id_type("account")), (uint32)),
    URI: string,
    quorum: uint32,
    price: array(regional_price),
    hash: bytes(20),
    seeders: array(protocol_id_type("account")),
    key_parts: array(CiphertextString),
    expiration: time_point_sec,
    publishing_fee: asset,
    synopsis: string,
    cd: optional(CustodyData)
}
);

export const request_to_buy = new Serializer( 
    "request_to_buy", {
    fee: asset,
    URI: string,
    consumer: protocol_id_type("account"),
    price: asset,
    region_code_from: uint32,
    pubKey: DIntegerString
}
);

export const leave_rating_and_comment = new Serializer( 
    "leave_rating_and_comment", {
    fee: asset,
    URI: string,
    consumer: protocol_id_type("account"),
    comment: string,
    rating: uint64
}
);

export const ready_to_publish = new Serializer( 
    "ready_to_publish", {
    fee: asset,
    seeder: protocol_id_type("account"),
    space: uint64,
    pubKey: DIntegerString,
    price_per_MByte: uint32,
    ipfs_ID: string
}
);

export const CustodyProof = new Serializer( 
    "CustodyProof", {
    reference_block: uint32,
    seed: fixed_array(5, uint32),
    mus: array(string),
    sigma: bytes(33)
}
);

export const proof_of_custody = new Serializer( 
    "proof_of_custody", {
    fee: asset,
    seeder: protocol_id_type("account"),
    URI: string,
    proof: optional(CustodyProof)
}
);

export const DeliveryProofString = new Serializer( 
    "DeliveryProofString", {
    G1: DIntegerString,
    G2: DIntegerString,
    G3: DIntegerString,
    s: DIntegerString,
    r: DIntegerString
}
);

export const deliver_keys = new Serializer( 
    "deliver_keys", {
    fee: asset,
    seeder: protocol_id_type("account"),
    proof: DeliveryProofString,
    key: CiphertextString,
    buying: protocol_id_type("buying")
}
);

export const subscribe = new Serializer( 
    "subscribe", {
    fee: asset,
    from: protocol_id_type("account"),
    to: protocol_id_type("account"),
    price: asset
}
);

export const subscribe_by_author = new Serializer( 
    "subscribe_by_author", {
    fee: asset,
    from: protocol_id_type("account"),
    to: protocol_id_type("account")
}
);

export const automatic_renewal_of_subscription = new Serializer( 
    "automatic_renewal_of_subscription", {
    fee: asset,
    consumer: protocol_id_type("account"),
    subscription: protocol_id_type("subscription"),
    automatic_renewal: bool
}
);

export const report_stats = new Serializer( 
    "report_stats", {
    fee: asset,
    consumer: protocol_id_type("account"),
    stats: map((protocol_id_type("account")), (uint64))
}
);

export const set_publishing_manager = new Serializer( 
    "set_publishing_manager", {
    fee: asset,
    from: protocol_id_type("account"),
    to: array(protocol_id_type("account")),
    can_create_publishers: bool
}
);

export const set_publishing_right = new Serializer( 
    "set_publishing_right", {
    fee: asset,
    from: protocol_id_type("account"),
    to: array(protocol_id_type("account")),
    is_publisher: bool
}
);

export const content_cancellation = new Serializer( 
    "content_cancellation", {
    fee: asset,
    author: protocol_id_type("account"),
    URI: string
}
);

export const disallow_automatic_renewal_of_subscription = new Serializer( 
    "disallow_automatic_renewal_of_subscription", {
    fee: asset,
    consumer: protocol_id_type("account"),
    subscription: protocol_id_type("subscription")
}
);

export const return_escrow_submission = new Serializer( 
    "return_escrow_submission", {
    fee: asset,
    author: protocol_id_type("account"),
    escrow: asset,
    content: protocol_id_type("content")
}
);

export const return_escrow_buying = new Serializer( 
    "return_escrow_buying", {
    fee: asset,
    consumer: protocol_id_type("account"),
    escrow: asset,
    buying: protocol_id_type("buying")
}
);

export const pay_seeder = new Serializer( 
    "pay_seeder", {
    fee: asset,
    payout: asset,
    author: protocol_id_type("account"),
    seeder: protocol_id_type("account")
}
);

export const finish_buying = new Serializer( 
    "finish_buying", {
    fee: asset,
    payout: asset,
    author: protocol_id_type("account"),
    co_authors: map((protocol_id_type("account")), (uint32)),
    buying: protocol_id_type("buying"),
    consumer: protocol_id_type("account")
}
);

export const renewal_of_subscription = new Serializer( 
    "renewal_of_subscription", {
    fee: asset,
    consumer: protocol_id_type("account"),
    subscription: protocol_id_type("subscription")
}
);

operation.st_operations = [
    transfer,    
    account_create,    
    account_update,    
    asset_create,    
    asset_update,    
    asset_publish_feed,    
    witness_create,    
    witness_update,    
    witness_update_global_parameters,    
    proposal_create,    
    proposal_update,    
    proposal_delete,    
    withdraw_permission_create,    
    withdraw_permission_update,    
    withdraw_permission_claim,    
    withdraw_permission_delete,    
    vesting_balance_create,    
    vesting_balance_withdraw,    
    custom,    
    assert,    
    content_submit,    
    request_to_buy,    
    leave_rating_and_comment,    
    ready_to_publish,    
    proof_of_custody,    
    deliver_keys,    
    subscribe,    
    subscribe_by_author,    
    automatic_renewal_of_subscription,    
    report_stats,    
    set_publishing_manager,    
    set_publishing_right,    
    content_cancellation,    
    disallow_automatic_renewal_of_subscription,    
    return_escrow_submission,    
    return_escrow_buying,    
    pay_seeder,    
    finish_buying,    
    renewal_of_subscription
];

export const transaction = new Serializer( 
    "transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions)
}
);

export const signed_transaction = new Serializer( 
    "signed_transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65))
}
);

//# -------------------------------
//#  Generated code end
//# -------------------------------

// Custom Types

export const stealth_memo_data = new Serializer(
    "stealth_memo_data", {
    from: optional( public_key ),
    amount: asset,
    blinding_factor: bytes(32),
    commitment: bytes(33),
    check: uint32
})
// var stealth_confirmation = new Serializer(
//     "stealth_confirmation", {
//     one_time_key: public_key,
//     to: optional( public_key ),
//     encrypted_memo: stealth_memo_data
// })

