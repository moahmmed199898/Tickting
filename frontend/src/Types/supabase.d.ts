export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      category: {
        Row: {
          category_id: number
          category_name: string
        }
        Insert: {
          category_id?: number
          category_name: string
        }
        Update: {
          category_id?: number
          category_name?: string
        }
        Relationships: []
      }
      department: {
        Row: {
          department_id: number
          department_name: string
        }
        Insert: {
          department_id?: number
          department_name: string
        }
        Update: {
          department_id?: number
          department_name?: string
        }
        Relationships: []
      }
      location: {
        Row: {
          location_id: number
          location_name: string
        }
        Insert: {
          location_id?: number
          location_name: string
        }
        Update: {
          location_id?: number
          location_name?: string
        }
        Relationships: []
      }
      priority: {
        Row: {
          priority_id: number
          priorty_description: string
        }
        Insert: {
          priority_id: number
          priorty_description: string
        }
        Update: {
          priority_id?: number
          priorty_description?: string
        }
        Relationships: []
      }
      role: {
        Row: {
          role_id: number
          role_name: string
        }
        Insert: {
          role_id?: number
          role_name: string
        }
        Update: {
          role_id?: number
          role_name?: string
        }
        Relationships: []
      }
      status: {
        Row: {
          status_id: number
          status_name: string
        }
        Insert: {
          status_id?: number
          status_name: string
        }
        Update: {
          status_id?: number
          status_name?: string
        }
        Relationships: []
      }
      ticket: {
        Row: {
          approval_uid: string | null
          asset_id: number | null
          category_id: number | null
          cost: number | null
          location_id: number | null
          priority_id: number
          requester_uid: string | null
          responsable_department_id: number | null
          responsable_uid: string | null
          status_id: number
          ticket_description: string
          ticket_number: number
          title: string
        }
        Insert: {
          approval_uid?: string | null
          asset_id?: number | null
          category_id?: number | null
          cost?: number | null
          location_id?: number | null
          priority_id: number
          requester_uid?: string | null
          responsable_department_id?: number | null
          responsable_uid?: string | null
          status_id: number
          ticket_description: string
          ticket_number?: number
          title: string
        }
        Update: {
          approval_uid?: string | null
          asset_id?: number | null
          category_id?: number | null
          cost?: number | null
          location_id?: number | null
          priority_id?: number
          requester_uid?: string | null
          responsable_department_id?: number | null
          responsable_uid?: string | null
          status_id?: number
          ticket_description?: string
          ticket_number?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_approval_uid_fkey"
            columns: ["approval_uid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "category"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "ticket_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "location"
            referencedColumns: ["location_id"]
          },
          {
            foreignKeyName: "ticket_priority_id_fkey"
            columns: ["priority_id"]
            referencedRelation: "priority"
            referencedColumns: ["priority_id"]
          },
          {
            foreignKeyName: "ticket_requester_uid_fkey"
            columns: ["requester_uid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_responsable_department_id_fkey"
            columns: ["responsable_department_id"]
            referencedRelation: "department"
            referencedColumns: ["department_id"]
          },
          {
            foreignKeyName: "ticket_responsable_uid_fkey"
            columns: ["responsable_uid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_status_id_fkey"
            columns: ["status_id"]
            referencedRelation: "status"
            referencedColumns: ["status_id"]
          }
        ]
      }
      user: {
        Row: {
          department_id: number | null
          role_id: number | null
          user_id: string
        }
        Insert: {
          department_id?: number | null
          role_id?: number | null
          user_id: string
        }
        Update: {
          department_id?: number | null
          role_id?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_department_id_fkey"
            columns: ["department_id"]
            referencedRelation: "department"
            referencedColumns: ["department_id"]
          },
          {
            foreignKeyName: "user_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "role"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "user_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_id_by_email: {
        Args: {
          email: string
        }
        Returns: {
          id: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

