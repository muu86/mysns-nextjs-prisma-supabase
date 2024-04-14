/* eslint-disable */
import type { Prisma, User, UserFile, UserAddress, Post, PostFile, File, Address } from "/Users/mj/work/sns/prisma-supabase/node_modules/@prisma/client";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "addresses" | "files";
        ListRelations: "addresses" | "files";
        Relations: {
            addresses: {
                Shape: UserAddress[];
                Name: "UserAddress";
                Nullable: false;
            };
            files: {
                Shape: UserFile[];
                Name: "UserFile";
                Nullable: false;
            };
        };
    };
    UserFile: {
        Name: "UserFile";
        Shape: UserFile;
        Include: Prisma.UserFileInclude;
        Select: Prisma.UserFileSelect;
        OrderBy: Prisma.UserFileOrderByWithRelationInput;
        WhereUnique: Prisma.UserFileWhereUniqueInput;
        Where: Prisma.UserFileWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "file";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            file: {
                Shape: File;
                Name: "File";
                Nullable: false;
            };
        };
    };
    UserAddress: {
        Name: "UserAddress";
        Shape: UserAddress;
        Include: Prisma.UserAddressInclude;
        Select: Prisma.UserAddressSelect;
        OrderBy: Prisma.UserAddressOrderByWithRelationInput;
        WhereUnique: Prisma.UserAddressWhereUniqueInput;
        Where: Prisma.UserAddressWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "address";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
            address: {
                Shape: Address;
                Name: "Address";
                Nullable: false;
            };
        };
    };
    Post: {
        Name: "Post";
        Shape: Post;
        Include: Prisma.PostInclude;
        Select: Prisma.PostSelect;
        OrderBy: Prisma.PostOrderByWithRelationInput;
        WhereUnique: Prisma.PostWhereUniqueInput;
        Where: Prisma.PostWhereInput;
        Create: {};
        Update: {};
        RelationName: "address" | "files";
        ListRelations: "files";
        Relations: {
            address: {
                Shape: Address;
                Name: "Address";
                Nullable: false;
            };
            files: {
                Shape: PostFile[];
                Name: "PostFile";
                Nullable: false;
            };
        };
    };
    PostFile: {
        Name: "PostFile";
        Shape: PostFile;
        Include: Prisma.PostFileInclude;
        Select: Prisma.PostFileSelect;
        OrderBy: Prisma.PostFileOrderByWithRelationInput;
        WhereUnique: Prisma.PostFileWhereUniqueInput;
        Where: Prisma.PostFileWhereInput;
        Create: {};
        Update: {};
        RelationName: "post" | "file";
        ListRelations: never;
        Relations: {
            post: {
                Shape: Post;
                Name: "Post";
                Nullable: false;
            };
            file: {
                Shape: File;
                Name: "File";
                Nullable: false;
            };
        };
    };
    File: {
        Name: "File";
        Shape: File;
        Include: Prisma.FileInclude;
        Select: Prisma.FileSelect;
        OrderBy: Prisma.FileOrderByWithRelationInput;
        WhereUnique: Prisma.FileWhereUniqueInput;
        Where: Prisma.FileWhereInput;
        Create: {};
        Update: {};
        RelationName: "posts" | "UserFile";
        ListRelations: "posts" | "UserFile";
        Relations: {
            posts: {
                Shape: PostFile[];
                Name: "PostFile";
                Nullable: false;
            };
            UserFile: {
                Shape: UserFile[];
                Name: "UserFile";
                Nullable: false;
            };
        };
    };
    Address: {
        Name: "Address";
        Shape: Address;
        Include: Prisma.AddressInclude;
        Select: Prisma.AddressSelect;
        OrderBy: Prisma.AddressOrderByWithRelationInput;
        WhereUnique: Prisma.AddressWhereUniqueInput;
        Where: Prisma.AddressWhereInput;
        Create: {};
        Update: {};
        RelationName: "Post" | "users";
        ListRelations: "Post" | "users";
        Relations: {
            Post: {
                Shape: Post[];
                Name: "Post";
                Nullable: false;
            };
            users: {
                Shape: UserAddress[];
                Name: "UserAddress";
                Nullable: false;
            };
        };
    };
}