let ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.object_type = {
  "null": 0,
  base: 1,
  account: 2,
  asset: 3,
  witness: 4,
  limit_order: 5,
  custom: 6,
  proposal: 7,
  operation_history: 8,
  withdraw_permission: 9,
  vesting_balance: 10
};

ChainTypes.impl_object_type = {
  global_property: 0,
  dynamic_global_property: 1,
    reserved0: 2,      // formerly index_meta, TODO: delete me
    asset_dynamic_data_type: 3,
    account_balance: 4,
    account_statistics: 5,
    transaction: 6,
    block_summary: 7,
    account_transaction_history: 8,
    chain_property: 9,
    witness_schedule: 10,
    budget_record: 11,
    buyback: 12,
    buying: 13,
    content: 14,
    publisher: 15,
    rating: 16,
    seeding_statistics: 17
};




ChainTypes.vote_type = {
  committee: 0,
  witness: 1,
  worker: 2
};

ChainTypes.operations = {
  transfer: 0,
  limit_order_create: 1,
  limit_order_cancel: 2,
  // call_order_update: 3,
  fill_order: 3,
  account_create: 4,
  account_update: 5,
  account_whitelist: 6,
  account_upgrade: 7,
  account_transfer: 8,
  asset_create: 9,
  asset_update: 10,
  asset_update_bitasset: 11,
  asset_update_feed_producers: 12,
  asset_issue: 13,
  asset_reserve: 14,
  asset_fund_fee_pool: 15,
  asset_settle: 16,
  asset_global_settle: 17,
  asset_publish_feed: 18,
  witness_create: 19,
  witness_update: 20,
  proposal_create: 21,
  proposal_update: 22,
  proposal_delete: 23,
  withdraw_permission_create: 24,
  withdraw_permission_update: 25,
  withdraw_permission_claim: 26,
  withdraw_permission_delete: 27,
  committee_member_create: 28,
  committee_member_update: 29,
  committee_member_update_global_parameters: 30,
  vesting_balance_create: 31,
  vesting_balance_withdraw: 32,
  worker_create: 33,
  custom: 34,
  assert: 35,
  balance_claim: 36,
  override_transfer: 37,
  transfer_to_blind: 38,
  blind_transfer: 39,
  transfer_from_blind: 40,
  asset_settle_cancel: 41,
  asset_claim_fees: 42
};

export default ChainTypes;
