import { MergeDeep } from 'type-fest';
import {
  Database as DatabaseGenerated,
  Tables,
  TablesInsert,
  TablesUpdate,
} from './database.types';

export type AudioTracks = Tables<'audio_tracks'>;
export type NewAudioTracks = TablesInsert<'audio_tracks'>;
export type UpdateAudioTracks = TablesUpdate<'audio_tracks'>;

export type Badges = Tables<'badges'>;
export type NewBadges = TablesInsert<'badges'>;
export type UpdateBadges = TablesUpdate<'badges'>;

export type ChallengeParticipants = Tables<'challenge_participants'>;
export type NewChallengeParticipants = TablesInsert<'challenge_participants'>;
export type UpdateChallengeParticipants =
  TablesUpdate<'challenge_participants'>;

export type ChallengeUpdates = Tables<'challenge_updates'>;
export type NewChallengeUpdates = TablesInsert<'challenge_updates'>;
export type UpdateChallengeUpdates = TablesUpdate<'challenge_updates'>;

export type Challenges = Tables<'challenges'>;
export type NewChallenges = TablesInsert<'challenges'>;
export type UpdateChallenges = TablesUpdate<'challenges'>;

export type Comments = Tables<'comments'>;
export type NewComments = TablesInsert<'comments'>;
export type UpdateComments = TablesUpdate<'comments'>;

export type ContentEdits = Tables<'content_edits'>;
export type NewContentEdits = TablesInsert<'content_edits'>;
export type UpdateContentEdits = TablesUpdate<'content_edits'>;

export type Disputes = Tables<'disputes'>;
export type NewDisputes = TablesInsert<'disputes'>;
export type UpdateDisputes = TablesUpdate<'disputes'>;

export type Followers = Tables<'followers'>;
export type NewFollowers = TablesInsert<'followers'>;
export type UpdateFollowers = TablesUpdate<'followers'>;

export type Likes = Tables<'likes'>;
export type NewLikes = TablesInsert<'likes'>;
export type UpdateLikes = TablesUpdate<'likes'>;

export type Messages = Tables<'messages'>;
export type NewMessages = TablesInsert<'messages'>;
export type UpdateMessages = TablesUpdate<'messages'>;

export type Notifications = Tables<'notifications'>;
export type NewNotifications = TablesInsert<'notifications'>;
export type UpdateNotifications = TablesUpdate<'notifications'>;

export type Orders = Tables<'orders'>;
export type NewOrders = TablesInsert<'orders'>;
export type UpdateOrders = TablesUpdate<'orders'>;

export type PostAudio = Tables<'post_audio'>;
export type NewPostAudio = TablesInsert<'post_audio'>;
export type UpdatePostAudio = TablesUpdate<'post_audio'>;

export type Posts = Tables<'posts'>;
export type NewPosts = TablesInsert<'posts'>;
export type UpdatePosts = TablesUpdate<'posts'>;

export type PrivateContent = Tables<'private_content'>;
export type NewPrivateContent = TablesInsert<'private_content'>;
export type UpdatePrivateContent = TablesUpdate<'private_content'>;

export type Products = Tables<'products'>;
export type NewProducts = TablesInsert<'products'>;
export type UpdateProducts = TablesUpdate<'products'>;

export type Reactions = Tables<'reactions'>;
export type NewReactions = TablesInsert<'reactions'>;
export type UpdateReactions = TablesUpdate<'reactions'>;

export type RefundRequests = Tables<'refund_requests'>;
export type NewRefundRequests = TablesInsert<'refund_requests'>;
export type UpdateRefundRequests = TablesUpdate<'refund_requests'>;

export type Reviews = Tables<'reviews'>;
export type NewReviews = TablesInsert<'reviews'>;
export type UpdateReviews = TablesUpdate<'reviews'>;

export type StoreSettings = Tables<'store_settings'>;
export type NewStoreSettings = TablesInsert<'store_settings'>;
export type UpdateStoreSettings = TablesUpdate<'store_settings'>;

export type TokenPurchases = Tables<'token_purchases'>;
export type NewTokenPurchases = TablesInsert<'token_purchases'>;
export type UpdateTokenPurchases = TablesUpdate<'token_purchases'>;

export type TokenRewards = Tables<'token_rewards'>;
export type NewTokenRewards = TablesInsert<'token_rewards'>;
export type UpdateTokenRewards = TablesUpdate<'token_rewards'>;

export type Transactions = Tables<'transactions'>;
export type NewTransactions = TablesInsert<'transactions'>;
export type UpdateTransactions = TablesUpdate<'transactions'>;

export type UserBadges = Tables<'user_badges'>;
export type NewUserBadges = TablesInsert<'user_badges'>;
export type UpdateUserBadges = TablesUpdate<'user_badges'>;

export type UserProfiles = Tables<'user_profiles'>;
export type NewUserProfiles = TablesInsert<'user_profiles'>;
export type UpdateUserProfiles = TablesUpdate<'user_profiles'>;

// export type Users = Tables<'users'>;
// export type NewUsers = TablesInsert<'users'>;
// export type UpdateUsers = TablesUpdate<'users'>;

export type VerificationRequests = Tables<'verification_requests'>;
export type NewVerificationRequests = TablesInsert<'verification_requests'>;
export type UpdateVerificationRequests = TablesUpdate<'verification_requests'>;

export type VideoCalls = Tables<'video_calls'>;
export type NewVideoCalls = TablesInsert<'video_calls'>;
export type UpdateVideoCalls = TablesUpdate<'video_calls'>;

export type Wallets = Tables<'wallets'>;
export type NewWallets = TablesInsert<'wallets'>;
export type UpdateWallets = TablesUpdate<'wallets'>;

export type Database = MergeDeep<DatabaseGenerated, object>;
