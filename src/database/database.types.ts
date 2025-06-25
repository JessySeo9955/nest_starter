export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      audio_tracks: {
        Row: {
          artist: string | null;
          created_at: string | null;
          duration_seconds: number | null;
          file_url: string | null;
          id: string;
          title: string | null;
        };
        Insert: {
          artist?: string | null;
          created_at?: string | null;
          duration_seconds?: number | null;
          file_url?: string | null;
          id: string;
          title?: string | null;
        };
        Update: {
          artist?: string | null;
          created_at?: string | null;
          duration_seconds?: number | null;
          file_url?: string | null;
          id?: string;
          title?: string | null;
        };
        Relationships: [];
      };
      badges: {
        Row: {
          created_at: string | null;
          description: string | null;
          icon_url: string | null;
          id: string;
          title: string;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          icon_url?: string | null;
          id: string;
          title: string;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          icon_url?: string | null;
          id?: string;
          title?: string;
        };
        Relationships: [];
      };
      challenge_participants: {
        Row: {
          challenge_id: string | null;
          id: string;
          joined_at: string | null;
          user_id: string | null;
        };
        Insert: {
          challenge_id?: string | null;
          id: string;
          joined_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          challenge_id?: string | null;
          id?: string;
          joined_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'challenge_participants_challenge_id_fkey';
            columns: ['challenge_id'];
            isOneToOne: false;
            referencedRelation: 'challenges';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'challenge_participants_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      challenge_updates: {
        Row: {
          challenge_id: string | null;
          created_at: string | null;
          id: string;
          update_text: string | null;
        };
        Insert: {
          challenge_id?: string | null;
          created_at?: string | null;
          id: string;
          update_text?: string | null;
        };
        Update: {
          challenge_id?: string | null;
          created_at?: string | null;
          id?: string;
          update_text?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'challenge_updates_challenge_id_fkey';
            columns: ['challenge_id'];
            isOneToOne: false;
            referencedRelation: 'challenges';
            referencedColumns: ['id'];
          },
        ];
      };
      challenges: {
        Row: {
          audio_track_id: string | null;
          created_at: string | null;
          creator_id: string | null;
          deadline: string | null;
          description: string | null;
          id: string;
          is_private: boolean | null;
          lyrics: string | null;
          participation_count: number | null;
          popularity_score: number | null;
          reaction_count: number | null;
          title: string | null;
          views: number | null;
        };
        Insert: {
          audio_track_id?: string | null;
          created_at?: string | null;
          creator_id?: string | null;
          deadline?: string | null;
          description?: string | null;
          id: string;
          is_private?: boolean | null;
          lyrics?: string | null;
          participation_count?: number | null;
          popularity_score?: number | null;
          reaction_count?: number | null;
          title?: string | null;
          views?: number | null;
        };
        Update: {
          audio_track_id?: string | null;
          created_at?: string | null;
          creator_id?: string | null;
          deadline?: string | null;
          description?: string | null;
          id?: string;
          is_private?: boolean | null;
          lyrics?: string | null;
          participation_count?: number | null;
          popularity_score?: number | null;
          reaction_count?: number | null;
          title?: string | null;
          views?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'challenges_audio_track_id_fkey';
            columns: ['audio_track_id'];
            isOneToOne: false;
            referencedRelation: 'audio_tracks';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'challenges_creator_id_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      comments: {
        Row: {
          created_at: string | null;
          id: string;
          post_id: string | null;
          text: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          post_id?: string | null;
          text?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          post_id?: string | null;
          text?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'comments_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      content_edits: {
        Row: {
          created_at: string | null;
          edit_type: string | null;
          edited_url: string | null;
          id: string;
          is_final: boolean | null;
          post_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          edit_type?: string | null;
          edited_url?: string | null;
          id: string;
          is_final?: boolean | null;
          post_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          edit_type?: string | null;
          edited_url?: string | null;
          id?: string;
          is_final?: boolean | null;
          post_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'content_edits_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
        ];
      };
      disputes: {
        Row: {
          created_at: string | null;
          id: string;
          issue: string | null;
          order_id: string | null;
          status: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          issue?: string | null;
          order_id?: string | null;
          status?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          issue?: string | null;
          order_id?: string | null;
          status?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'disputes_order_id_fkey';
            columns: ['order_id'];
            isOneToOne: false;
            referencedRelation: 'orders';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'disputes_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      followers: {
        Row: {
          created_at: string | null;
          follower_id: string | null;
          id: string;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          follower_id?: string | null;
          id: string;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          follower_id?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'followers_follower_id_fkey';
            columns: ['follower_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'followers_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      likes: {
        Row: {
          created_at: string | null;
          id: string;
          post_id: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          post_id?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          post_id?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'likes_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'likes_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      messages: {
        Row: {
          created_at: string | null;
          id: string;
          message: string | null;
          receiver_id: string | null;
          sender_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          message?: string | null;
          receiver_id?: string | null;
          sender_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          message?: string | null;
          receiver_id?: string | null;
          sender_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'messages_receiver_id_fkey';
            columns: ['receiver_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'messages_sender_id_fkey';
            columns: ['sender_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      notifications: {
        Row: {
          content: string | null;
          created_at: string | null;
          id: string;
          is_read: boolean | null;
          type: string | null;
          user_id: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string | null;
          id: string;
          is_read?: boolean | null;
          type?: string | null;
          user_id?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string | null;
          id?: string;
          is_read?: boolean | null;
          type?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'notifications_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      orders: {
        Row: {
          buyer_id: string | null;
          id: string;
          ordered_at: string | null;
          product_id: string | null;
          quantity: number | null;
          status: string | null;
          total_price: number | null;
        };
        Insert: {
          buyer_id?: string | null;
          id: string;
          ordered_at?: string | null;
          product_id?: string | null;
          quantity?: number | null;
          status?: string | null;
          total_price?: number | null;
        };
        Update: {
          buyer_id?: string | null;
          id?: string;
          ordered_at?: string | null;
          product_id?: string | null;
          quantity?: number | null;
          status?: string | null;
          total_price?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'orders_buyer_id_fkey';
            columns: ['buyer_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'orders_product_id_fkey';
            columns: ['product_id'];
            isOneToOne: false;
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
        ];
      };
      post_audio: {
        Row: {
          end_time_seconds: number | null;
          id: string;
          post_id: string | null;
          start_time_seconds: number | null;
          track_id: string | null;
        };
        Insert: {
          end_time_seconds?: number | null;
          id: string;
          post_id?: string | null;
          start_time_seconds?: number | null;
          track_id?: string | null;
        };
        Update: {
          end_time_seconds?: number | null;
          id?: string;
          post_id?: string | null;
          start_time_seconds?: number | null;
          track_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'post_audio_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'post_audio_track_id_fkey';
            columns: ['track_id'];
            isOneToOne: false;
            referencedRelation: 'audio_tracks';
            referencedColumns: ['id'];
          },
        ];
      };
      posts: {
        Row: {
          challenge_id: string | null;
          content_url: string | null;
          created_at: string | null;
          description: string | null;
          id: string;
          is_edited: boolean | null;
          is_private: boolean | null;
          original_content_url: string | null;
          user_id: string | null;
        };
        Insert: {
          challenge_id?: string | null;
          content_url?: string | null;
          created_at?: string | null;
          description?: string | null;
          id: string;
          is_edited?: boolean | null;
          is_private?: boolean | null;
          original_content_url?: string | null;
          user_id?: string | null;
        };
        Update: {
          challenge_id?: string | null;
          content_url?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: string;
          is_edited?: boolean | null;
          is_private?: boolean | null;
          original_content_url?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'posts_challenge_id_fkey';
            columns: ['challenge_id'];
            isOneToOne: false;
            referencedRelation: 'challenges';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'posts_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      private_content: {
        Row: {
          content_url: string | null;
          created_at: string | null;
          description: string | null;
          id: string;
          is_active: boolean | null;
          price: number | null;
          user_id: string | null;
        };
        Insert: {
          content_url?: string | null;
          created_at?: string | null;
          description?: string | null;
          id: string;
          is_active?: boolean | null;
          price?: number | null;
          user_id?: string | null;
        };
        Update: {
          content_url?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: string;
          is_active?: boolean | null;
          price?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'private_content_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      products: {
        Row: {
          created_at: string | null;
          description: string | null;
          id: string;
          image_url: string | null;
          in_stock: boolean | null;
          price: number | null;
          seller_id: string | null;
          title: string | null;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          id: string;
          image_url?: string | null;
          in_stock?: boolean | null;
          price?: number | null;
          seller_id?: string | null;
          title?: string | null;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          id?: string;
          image_url?: string | null;
          in_stock?: boolean | null;
          price?: number | null;
          seller_id?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'products_seller_id_fkey';
            columns: ['seller_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      reactions: {
        Row: {
          created_at: string | null;
          id: string;
          post_id: string | null;
          reaction_type: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          post_id?: string | null;
          reaction_type?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          post_id?: string | null;
          reaction_type?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'reactions_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'reactions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      refund_requests: {
        Row: {
          created_at: string | null;
          id: string;
          order_id: string | null;
          reason: string | null;
          status: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          order_id?: string | null;
          reason?: string | null;
          status?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          order_id?: string | null;
          reason?: string | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'refund_requests_order_id_fkey';
            columns: ['order_id'];
            isOneToOne: false;
            referencedRelation: 'orders';
            referencedColumns: ['id'];
          },
        ];
      };
      reviews: {
        Row: {
          created_at: string | null;
          id: string;
          product_id: string | null;
          rating: number | null;
          review_text: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          product_id?: string | null;
          rating?: number | null;
          review_text?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          product_id?: string | null;
          rating?: number | null;
          review_text?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'reviews_product_id_fkey';
            columns: ['product_id'];
            isOneToOne: false;
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'reviews_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      store_settings: {
        Row: {
          created_at: string | null;
          id: string;
          seller_id: string | null;
          shipping_options: string | null;
          store_policies: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          seller_id?: string | null;
          shipping_options?: string | null;
          store_policies?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          seller_id?: string | null;
          shipping_options?: string | null;
          store_policies?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'store_settings_seller_id_fkey';
            columns: ['seller_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      token_purchases: {
        Row: {
          amount_usd: number | null;
          created_at: string | null;
          id: string;
          provider: string | null;
          status: string | null;
          tokens_purchased: number | null;
          user_id: string | null;
        };
        Insert: {
          amount_usd?: number | null;
          created_at?: string | null;
          id: string;
          provider?: string | null;
          status?: string | null;
          tokens_purchased?: number | null;
          user_id?: string | null;
        };
        Update: {
          amount_usd?: number | null;
          created_at?: string | null;
          id?: string;
          provider?: string | null;
          status?: string | null;
          tokens_purchased?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'token_purchases_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      token_rewards: {
        Row: {
          challenge_id: string | null;
          created_at: string | null;
          id: string;
          reason: string | null;
          tokens_awarded: number | null;
          user_id: string | null;
        };
        Insert: {
          challenge_id?: string | null;
          created_at?: string | null;
          id: string;
          reason?: string | null;
          tokens_awarded?: number | null;
          user_id?: string | null;
        };
        Update: {
          challenge_id?: string | null;
          created_at?: string | null;
          id?: string;
          reason?: string | null;
          tokens_awarded?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'token_rewards_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      transactions: {
        Row: {
          amount: number | null;
          created_at: string | null;
          id: string;
          related_content_id: string | null;
          related_user_id: string | null;
          status: string | null;
          type: string | null;
          user_id: string | null;
        };
        Insert: {
          amount?: number | null;
          created_at?: string | null;
          id: string;
          related_content_id?: string | null;
          related_user_id?: string | null;
          status?: string | null;
          type?: string | null;
          user_id?: string | null;
        };
        Update: {
          amount?: number | null;
          created_at?: string | null;
          id?: string;
          related_content_id?: string | null;
          related_user_id?: string | null;
          status?: string | null;
          type?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'transactions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_badges: {
        Row: {
          badge_id: string | null;
          earned_at: string | null;
          id: string;
          user_id: string | null;
        };
        Insert: {
          badge_id?: string | null;
          earned_at?: string | null;
          id: string;
          user_id?: string | null;
        };
        Update: {
          badge_id?: string | null;
          earned_at?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_badges_badge_id_fkey';
            columns: ['badge_id'];
            isOneToOne: false;
            referencedRelation: 'badges';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_badges_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      user_profiles: {
        Row: {
          bio: string | null;
          created_at: string | null;
          id: string;
          is_phone_verified: boolean | null;
          is_private: boolean | null;
          is_verified: boolean | null;
          nickname: string | null;
          phone_number: string | null;
          profile_picture: string | null;
          verification_reason: string | null;
          verification_request_status: string | null;
        };
        Insert: {
          bio?: string | null;
          created_at?: string | null;
          id: string;
          is_phone_verified?: boolean | null;
          is_private?: boolean | null;
          is_verified?: boolean | null;
          nickname?: string | null;
          phone_number?: string | null;
          profile_picture?: string | null;
          verification_reason?: string | null;
          verification_request_status?: string | null;
        };
        Update: {
          bio?: string | null;
          created_at?: string | null;
          id?: string;
          is_phone_verified?: boolean | null;
          is_private?: boolean | null;
          is_verified?: boolean | null;
          nickname?: string | null;
          phone_number?: string | null;
          profile_picture?: string | null;
          verification_reason?: string | null;
          verification_request_status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          created_at: string | null;
          email: string;
          id: string;
          password: string;
        };
        Insert: {
          created_at?: string | null;
          email: string;
          id: string;
          password: string;
        };
        Update: {
          created_at?: string | null;
          email?: string;
          id?: string;
          password?: string;
        };
        Relationships: [];
      };
      verification_requests: {
        Row: {
          id: string;
          reason: string | null;
          reviewed_at: string | null;
          status: string | null;
          submitted_at: string | null;
          user_id: string | null;
        };
        Insert: {
          id: string;
          reason?: string | null;
          reviewed_at?: string | null;
          status?: string | null;
          submitted_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          id?: string;
          reason?: string | null;
          reviewed_at?: string | null;
          status?: string | null;
          submitted_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'verification_requests_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      video_calls: {
        Row: {
          caller_id: string | null;
          ended_at: string | null;
          id: string;
          receiver_id: string | null;
          started_at: string | null;
          status: string | null;
        };
        Insert: {
          caller_id?: string | null;
          ended_at?: string | null;
          id: string;
          receiver_id?: string | null;
          started_at?: string | null;
          status?: string | null;
        };
        Update: {
          caller_id?: string | null;
          ended_at?: string | null;
          id?: string;
          receiver_id?: string | null;
          started_at?: string | null;
          status?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'video_calls_caller_id_fkey';
            columns: ['caller_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'video_calls_receiver_id_fkey';
            columns: ['receiver_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      wallets: {
        Row: {
          balance: number | null;
          id: string;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          balance?: number | null;
          id: string;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          balance?: number | null;
          id?: string;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'wallets_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
