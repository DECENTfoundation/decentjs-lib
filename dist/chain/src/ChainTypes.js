"use strict";

exports.__esModule = true;
var ChainTypes = {};

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
  custom: 7,
  proposal: 8,
  operation_history: 7,
  withdraw_permission: 8,
  vesting_balance: 9
};

ChainTypes.impl_object_type = {
  global_property: 0,
  dynamic_global_property: 1,
  reserved0: 2, // formerly index_meta, TODO: delete me
  asset_dynamic_data_type: 3,
  account_balance: 4,
  account_statistics: 5,
  transaction: 6,
  block_summary: 7,
  account_transaction_history: 8,
  chain_property: 9,
  witness_schedule: 10,
  budget_record: 11,
  buying: 12,
  content: 13,
  publisher: 14,
  rating: 15,
  subscription_object: 16,
  seeding_statistics: 17,
  transaction_detail: 18
};

ChainTypes.vote_type = {
  committee: 0,
  witness: 1,
  worker: 2
};

ChainTypes.operations = {
  transfer: 0,
  account_create: 1,
  account_update: 2,
  asset_create: 3,
  asset_update: 4,
  asset_publish_feed: 5,
  witness_create: 6,
  witness_update: 7,
  witness_update_global_parameters: 8,
  proposal_create: 9,
  proposal_update: 10,
  proposal_delete: 11,
  withdraw_permission_create: 12,
  withdraw_permission_update: 13,
  withdraw_permission_claim: 14,
  withdraw_permission_delete: 15,
  vesting_balance_create: 16,
  vesting_balance_withdraw: 17,
  custom: 18,
  assert: 19,
  content_submit: 20,
  request_to_buy: 21,
  leave_rating_and_comment: 22,
  ready_to_publish: 23,
  proof_of_custody: 24,
  deliver_keys: 25,
  subscribe: 26,
  subscribe_by_author: 27,
  automatic_renewal_of_subscription: 28,
  report_stats: 29,
  set_publishing_manager: 30,
  set_publishing_right: 31,
  content_cancellation: 32,
  disallow_automatic_renewal_of_subscription: 33,
  return_escrow_submission: 34,
  return_escrow_buying: 35,
  pay_seeder: 36,
  finish_buying: 37,
  renewal_of_subscription: 38
};

exports.default = ChainTypes;
module.exports = exports["default"];