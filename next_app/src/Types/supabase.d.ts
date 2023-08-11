export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  orders: {
    Tables: {
      Category: {
        Row: {
          CategoryID: number
          CategoryName: string
        }
        Insert: {
          CategoryID?: number
          CategoryName: string
        }
        Update: {
          CategoryID?: number
          CategoryName?: string
        }
        Relationships: []
      }
      Department: {
        Row: {
          DepartmentID: number
          DepartmentName: string
        }
        Insert: {
          DepartmentID?: number
          DepartmentName: string
        }
        Update: {
          DepartmentID?: number
          DepartmentName?: string
        }
        Relationships: []
      }
      Location: {
        Row: {
          LocationID: number
          LocationName: string
        }
        Insert: {
          LocationID?: number
          LocationName: string
        }
        Update: {
          LocationID?: number
          LocationName?: string
        }
        Relationships: []
      }
      Priority: {
        Row: {
          Priority: number
          PriortyDescription: string
        }
        Insert: {
          Priority: number
          PriortyDescription: string
        }
        Update: {
          Priority?: number
          PriortyDescription?: string
        }
        Relationships: []
      }
      Role: {
        Row: {
          RoleID: number
          RoleName: string
        }
        Insert: {
          RoleID?: number
          RoleName: string
        }
        Update: {
          RoleID?: number
          RoleName?: string
        }
        Relationships: []
      }
      Status: {
        Row: {
          StatusID: number
          StatusName: string
        }
        Insert: {
          StatusID?: number
          StatusName: string
        }
        Update: {
          StatusID?: number
          StatusName?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          DepartmentID: number | null
          RoleID: number | null
          UserID: string
        }
        Insert: {
          DepartmentID?: number | null
          RoleID?: number | null
          UserID: string
        }
        Update: {
          DepartmentID?: number | null
          RoleID?: number | null
          UserID?: string
        }
        Relationships: [
          {
            foreignKeyName: "User_DepartmentID_fkey"
            columns: ["DepartmentID"]
            referencedRelation: "Department"
            referencedColumns: ["DepartmentID"]
          },
          {
            foreignKeyName: "User_RoleID_fkey"
            columns: ["RoleID"]
            referencedRelation: "Role"
            referencedColumns: ["RoleID"]
          },
          {
            foreignKeyName: "User_UserID_fkey"
            columns: ["UserID"]
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
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

