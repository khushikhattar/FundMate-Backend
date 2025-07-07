
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model Milestone
 * 
 */
export type Milestone = $Result.DefaultSelection<Prisma.$MilestonePayload>
/**
 * Model MilestoneVote
 * 
 */
export type MilestoneVote = $Result.DefaultSelection<Prisma.$MilestoneVotePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CamapignCreator: 'CamapignCreator',
  Donor: 'Donor',
  Admin: 'Admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CampaignStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const MilestoneStatus: {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  PAID: 'PAID'
};

export type MilestoneStatus = (typeof MilestoneStatus)[keyof typeof MilestoneStatus]


export const TransactionType: {
  DONATION: 'DONATION',
  PAYOUT: 'PAYOUT'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type MilestoneStatus = $Enums.MilestoneStatus

export const MilestoneStatus: typeof $Enums.MilestoneStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.milestoneVote`: Exposes CRUD operations for the **MilestoneVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MilestoneVotes
    * const milestoneVotes = await prisma.milestoneVote.findMany()
    * ```
    */
  get milestoneVote(): Prisma.MilestoneVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Campaign: 'Campaign',
    Donation: 'Donation',
    Milestone: 'Milestone',
    MilestoneVote: 'MilestoneVote',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "campaign" | "donation" | "milestone" | "milestoneVote" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      Milestone: {
        payload: Prisma.$MilestonePayload<ExtArgs>
        fields: Prisma.MilestoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findFirst: {
            args: Prisma.MilestoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          findMany: {
            args: Prisma.MilestoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          create: {
            args: Prisma.MilestoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          createMany: {
            args: Prisma.MilestoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          delete: {
            args: Prisma.MilestoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          update: {
            args: Prisma.MilestoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>[]
          }
          upsert: {
            args: Prisma.MilestoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestonePayload>
          }
          aggregate: {
            args: Prisma.MilestoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestone>
          }
          groupBy: {
            args: Prisma.MilestoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneCountAggregateOutputType> | number
          }
        }
      }
      MilestoneVote: {
        payload: Prisma.$MilestoneVotePayload<ExtArgs>
        fields: Prisma.MilestoneVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MilestoneVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MilestoneVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload>
          }
          findFirst: {
            args: Prisma.MilestoneVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MilestoneVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload>
          }
          findMany: {
            args: Prisma.MilestoneVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload>[]
          }
          create: {
            args: Prisma.MilestoneVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload>
          }
          createMany: {
            args: Prisma.MilestoneVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MilestoneVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload>[]
          }
          delete: {
            args: Prisma.MilestoneVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload>
          }
          update: {
            args: Prisma.MilestoneVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload>
          }
          deleteMany: {
            args: Prisma.MilestoneVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MilestoneVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MilestoneVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload>[]
          }
          upsert: {
            args: Prisma.MilestoneVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MilestoneVotePayload>
          }
          aggregate: {
            args: Prisma.MilestoneVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMilestoneVote>
          }
          groupBy: {
            args: Prisma.MilestoneVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<MilestoneVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.MilestoneVoteCountArgs<ExtArgs>
            result: $Utils.Optional<MilestoneVoteCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    campaign?: CampaignOmit
    donation?: DonationOmit
    milestone?: MilestoneOmit
    milestoneVote?: MilestoneVoteOmit
    transaction?: TransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    campaigns: number
    donations: number
    transactions: number
    votes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    donations?: boolean | UserCountOutputTypeCountDonationsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    votes?: boolean | UserCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneVoteWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    donations: number
    milestones: number
    transactions: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donations?: boolean | CampaignCountOutputTypeCountDonationsArgs
    milestones?: boolean | CampaignCountOutputTypeCountMilestonesArgs
    transactions?: boolean | CampaignCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountMilestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type MilestoneCountOutputType
   */

  export type MilestoneCountOutputType = {
    votes: number
    transactions: number
  }

  export type MilestoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | MilestoneCountOutputTypeCountVotesArgs
    transactions?: boolean | MilestoneCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneCountOutputType
     */
    select?: MilestoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneVoteWhereInput
  }

  /**
   * MilestoneCountOutputType without action
   */
  export type MilestoneCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    role: $Enums.Role | null
    firstname: string | null
    lastname: string | null
    username: string | null
    contact: string | null
    password: string | null
    address: string | null
    refreshToken: string | null
    email: string | null
    purpose: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    role: $Enums.Role | null
    firstname: string | null
    lastname: string | null
    username: string | null
    contact: string | null
    password: string | null
    address: string | null
    refreshToken: string | null
    email: string | null
    purpose: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    firstname: number
    lastname: number
    username: number
    contact: number
    password: number
    address: number
    refreshToken: number
    email: number
    purpose: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    firstname?: true
    lastname?: true
    username?: true
    contact?: true
    password?: true
    address?: true
    refreshToken?: true
    email?: true
    purpose?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    firstname?: true
    lastname?: true
    username?: true
    contact?: true
    password?: true
    address?: true
    refreshToken?: true
    email?: true
    purpose?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    firstname?: true
    lastname?: true
    username?: true
    contact?: true
    password?: true
    address?: true
    refreshToken?: true
    email?: true
    purpose?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    role: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    contact?: boolean
    password?: boolean
    address?: boolean
    refreshToken?: boolean
    email?: boolean
    purpose?: boolean
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    contact?: boolean
    password?: boolean
    address?: boolean
    refreshToken?: boolean
    email?: boolean
    purpose?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    contact?: boolean
    password?: boolean
    address?: boolean
    refreshToken?: boolean
    email?: boolean
    purpose?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    contact?: boolean
    password?: boolean
    address?: boolean
    refreshToken?: boolean
    email?: boolean
    purpose?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "firstname" | "lastname" | "username" | "contact" | "password" | "address" | "refreshToken" | "email" | "purpose", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    votes?: boolean | User$votesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      votes: Prisma.$MilestoneVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.Role
      firstname: string
      lastname: string
      username: string
      contact: string
      password: string
      address: string
      refreshToken: string
      email: string
      purpose: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends User$donationsArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    votes<T extends User$votesArgs<ExtArgs> = {}>(args?: Subset<T, User$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'Role'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly contact: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly purpose: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.donations
   */
  export type User$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.votes
   */
  export type User$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    where?: MilestoneVoteWhereInput
    orderBy?: MilestoneVoteOrderByWithRelationInput | MilestoneVoteOrderByWithRelationInput[]
    cursor?: MilestoneVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneVoteScalarFieldEnum | MilestoneVoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    id: number | null
    goalAmount: number | null
    amountRaised: number | null
    userId: number | null
  }

  export type CampaignSumAggregateOutputType = {
    id: number | null
    goalAmount: bigint | null
    amountRaised: bigint | null
    userId: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isActive: boolean | null
    cstatus: $Enums.CampaignStatus | null
    createdAt: Date | null
    goalAmount: bigint | null
    amountRaised: bigint | null
    userId: number | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isActive: boolean | null
    cstatus: $Enums.CampaignStatus | null
    createdAt: Date | null
    goalAmount: bigint | null
    amountRaised: bigint | null
    userId: number | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isActive: number
    cstatus: number
    createdAt: number
    goalAmount: number
    amountRaised: number
    userId: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    id?: true
    goalAmount?: true
    amountRaised?: true
    userId?: true
  }

  export type CampaignSumAggregateInputType = {
    id?: true
    goalAmount?: true
    amountRaised?: true
    userId?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    cstatus?: true
    createdAt?: true
    goalAmount?: true
    amountRaised?: true
    userId?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    cstatus?: true
    createdAt?: true
    goalAmount?: true
    amountRaised?: true
    userId?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isActive?: true
    cstatus?: true
    createdAt?: true
    goalAmount?: true
    amountRaised?: true
    userId?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: number
    title: string
    description: string
    isActive: boolean
    cstatus: $Enums.CampaignStatus
    createdAt: Date
    goalAmount: bigint
    amountRaised: bigint
    userId: number
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    cstatus?: boolean
    createdAt?: boolean
    goalAmount?: boolean
    amountRaised?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    donations?: boolean | Campaign$donationsArgs<ExtArgs>
    milestones?: boolean | Campaign$milestonesArgs<ExtArgs>
    transactions?: boolean | Campaign$transactionsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    cstatus?: boolean
    createdAt?: boolean
    goalAmount?: boolean
    amountRaised?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    cstatus?: boolean
    createdAt?: boolean
    goalAmount?: boolean
    amountRaised?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    cstatus?: boolean
    createdAt?: boolean
    goalAmount?: boolean
    amountRaised?: boolean
    userId?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "isActive" | "cstatus" | "createdAt" | "goalAmount" | "amountRaised" | "userId", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    donations?: boolean | Campaign$donationsArgs<ExtArgs>
    milestones?: boolean | Campaign$milestonesArgs<ExtArgs>
    transactions?: boolean | Campaign$transactionsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      donations: Prisma.$DonationPayload<ExtArgs>[]
      milestones: Prisma.$MilestonePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      isActive: boolean
      cstatus: $Enums.CampaignStatus
      createdAt: Date
      goalAmount: bigint
      amountRaised: bigint
      userId: number
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donations<T extends Campaign$donationsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    milestones<T extends Campaign$milestonesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$milestonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Campaign$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'Int'>
    readonly title: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly isActive: FieldRef<"Campaign", 'Boolean'>
    readonly cstatus: FieldRef<"Campaign", 'CampaignStatus'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly goalAmount: FieldRef<"Campaign", 'BigInt'>
    readonly amountRaised: FieldRef<"Campaign", 'BigInt'>
    readonly userId: FieldRef<"Campaign", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.donations
   */
  export type Campaign$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Campaign.milestones
   */
  export type Campaign$milestonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Campaign.transactions
   */
  export type Campaign$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
    campaignId: number | null
  }

  export type DonationSumAggregateOutputType = {
    id: number | null
    amount: bigint | null
    userId: number | null
    campaignId: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: number | null
    amount: bigint | null
    createdAt: Date | null
    userId: number | null
    campaignId: number | null
  }

  export type DonationMaxAggregateOutputType = {
    id: number | null
    amount: bigint | null
    createdAt: Date | null
    userId: number | null
    campaignId: number | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    userId: number
    campaignId: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    campaignId?: true
  }

  export type DonationSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    campaignId?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    userId?: true
    campaignId?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    userId?: true
    campaignId?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    userId?: true
    campaignId?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: number
    amount: bigint
    createdAt: Date
    userId: number
    campaignId: number
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    userId?: boolean
    campaignId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    userId?: boolean
    campaignId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    userId?: boolean
    campaignId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    userId?: boolean
    campaignId?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "createdAt" | "userId" | "campaignId", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: bigint
      createdAt: Date
      userId: number
      campaignId: number
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'Int'>
    readonly amount: FieldRef<"Donation", 'BigInt'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly userId: FieldRef<"Donation", 'Int'>
    readonly campaignId: FieldRef<"Donation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Model Milestone
   */

  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    campaignId: number | null
  }

  export type MilestoneSumAggregateOutputType = {
    id: number | null
    amount: bigint | null
    campaignId: number | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    amount: bigint | null
    proofUrl: string | null
    status: $Enums.MilestoneStatus | null
    createdAt: Date | null
    campaignId: number | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    amount: bigint | null
    proofUrl: string | null
    status: $Enums.MilestoneStatus | null
    createdAt: Date | null
    campaignId: number | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    title: number
    description: number
    amount: number
    proofUrl: number
    status: number
    createdAt: number
    campaignId: number
    _all: number
  }


  export type MilestoneAvgAggregateInputType = {
    id?: true
    amount?: true
    campaignId?: true
  }

  export type MilestoneSumAggregateInputType = {
    id?: true
    amount?: true
    campaignId?: true
  }

  export type MilestoneMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    amount?: true
    proofUrl?: true
    status?: true
    createdAt?: true
    campaignId?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    amount?: true
    proofUrl?: true
    status?: true
    createdAt?: true
    campaignId?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    amount?: true
    proofUrl?: true
    status?: true
    createdAt?: true
    campaignId?: true
    _all?: true
  }

  export type MilestoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestone to aggregate.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneWhereInput
    orderBy?: MilestoneOrderByWithAggregationInput | MilestoneOrderByWithAggregationInput[]
    by: MilestoneScalarFieldEnum[] | MilestoneScalarFieldEnum
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _avg?: MilestoneAvgAggregateInputType
    _sum?: MilestoneSumAggregateInputType
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }

  export type MilestoneGroupByOutputType = {
    id: number
    title: string
    description: string | null
    amount: bigint
    proofUrl: string | null
    status: $Enums.MilestoneStatus
    createdAt: Date
    campaignId: number
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    proofUrl?: boolean
    status?: boolean
    createdAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    votes?: boolean | Milestone$votesArgs<ExtArgs>
    transactions?: boolean | Milestone$transactionsArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    proofUrl?: boolean
    status?: boolean
    createdAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    proofUrl?: boolean
    status?: boolean
    createdAt?: boolean
    campaignId?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestone"]>

  export type MilestoneSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    proofUrl?: boolean
    status?: boolean
    createdAt?: boolean
    campaignId?: boolean
  }

  export type MilestoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "amount" | "proofUrl" | "status" | "createdAt" | "campaignId", ExtArgs["result"]["milestone"]>
  export type MilestoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    votes?: boolean | Milestone$votesArgs<ExtArgs>
    transactions?: boolean | Milestone$transactionsArgs<ExtArgs>
    _count?: boolean | MilestoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type MilestoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $MilestonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Milestone"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      votes: Prisma.$MilestoneVotePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      amount: bigint
      proofUrl: string | null
      status: $Enums.MilestoneStatus
      createdAt: Date
      campaignId: number
    }, ExtArgs["result"]["milestone"]>
    composites: {}
  }

  type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneDefaultArgs> = $Result.GetResult<Prisma.$MilestonePayload, S>

  type MilestoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneCountAggregateInputType | true
    }

  export interface MilestoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Milestone'], meta: { name: 'Milestone' } }
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneFindUniqueArgs>(args: SelectSubset<T, MilestoneFindUniqueArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Milestone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneFindFirstArgs>(args?: SelectSubset<T, MilestoneFindFirstArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Milestone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneFindManyArgs>(args?: SelectSubset<T, MilestoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
     */
    create<T extends MilestoneCreateArgs>(args: SelectSubset<T, MilestoneCreateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Milestones.
     * @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneCreateManyArgs>(args?: SelectSubset<T, MilestoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Milestones and returns the data saved in the database.
     * @param {MilestoneCreateManyAndReturnArgs} args - Arguments to create many Milestones.
     * @example
     * // Create many Milestones
     * const milestone = await prisma.milestone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
     */
    delete<T extends MilestoneDeleteArgs>(args: SelectSubset<T, MilestoneDeleteArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneUpdateArgs>(args: SelectSubset<T, MilestoneUpdateArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneDeleteManyArgs>(args?: SelectSubset<T, MilestoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneUpdateManyArgs>(args: SelectSubset<T, MilestoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones and returns the data updated in the database.
     * @param {MilestoneUpdateManyAndReturnArgs} args - Arguments to update many Milestones.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Milestones and only return the `id`
     * const milestoneWithIdOnly = await prisma.milestone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MilestoneUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneUpsertArgs>(args: SelectSubset<T, MilestoneUpsertArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): Prisma.PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Milestone model
   */
  readonly fields: MilestoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    votes<T extends Milestone$votesArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Milestone$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Milestone$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Milestone model
   */
  interface MilestoneFieldRefs {
    readonly id: FieldRef<"Milestone", 'Int'>
    readonly title: FieldRef<"Milestone", 'String'>
    readonly description: FieldRef<"Milestone", 'String'>
    readonly amount: FieldRef<"Milestone", 'BigInt'>
    readonly proofUrl: FieldRef<"Milestone", 'String'>
    readonly status: FieldRef<"Milestone", 'MilestoneStatus'>
    readonly createdAt: FieldRef<"Milestone", 'DateTime'>
    readonly campaignId: FieldRef<"Milestone", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Milestone findUnique
   */
  export type MilestoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findFirst
   */
  export type MilestoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestone to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     */
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter, which Milestones to fetch.
     */
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     */
    orderBy?: MilestoneOrderByWithRelationInput | MilestoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     */
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     */
    skip?: number
    distinct?: MilestoneScalarFieldEnum | MilestoneScalarFieldEnum[]
  }

  /**
   * Milestone create
   */
  export type MilestoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Milestone.
     */
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }

  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Milestone createManyAndReturn
   */
  export type MilestoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to create many Milestones.
     */
    data: MilestoneCreateManyInput | MilestoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Milestone.
     */
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
  }

  /**
   * Milestone updateManyAndReturn
   */
  export type MilestoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * The data used to update Milestones.
     */
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     */
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     */
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }

  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    /**
     * Filter which Milestone to delete.
     */
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Milestones to delete
     */
    where?: MilestoneWhereInput
    /**
     * Limit how many Milestones to delete.
     */
    limit?: number
  }

  /**
   * Milestone.votes
   */
  export type Milestone$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    where?: MilestoneVoteWhereInput
    orderBy?: MilestoneVoteOrderByWithRelationInput | MilestoneVoteOrderByWithRelationInput[]
    cursor?: MilestoneVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MilestoneVoteScalarFieldEnum | MilestoneVoteScalarFieldEnum[]
  }

  /**
   * Milestone.transactions
   */
  export type Milestone$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Milestone without action
   */
  export type MilestoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
  }


  /**
   * Model MilestoneVote
   */

  export type AggregateMilestoneVote = {
    _count: MilestoneVoteCountAggregateOutputType | null
    _avg: MilestoneVoteAvgAggregateOutputType | null
    _sum: MilestoneVoteSumAggregateOutputType | null
    _min: MilestoneVoteMinAggregateOutputType | null
    _max: MilestoneVoteMaxAggregateOutputType | null
  }

  export type MilestoneVoteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    milestoneId: number | null
  }

  export type MilestoneVoteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    milestoneId: number | null
  }

  export type MilestoneVoteMinAggregateOutputType = {
    id: number | null
    approved: boolean | null
    userId: number | null
    milestoneId: number | null
  }

  export type MilestoneVoteMaxAggregateOutputType = {
    id: number | null
    approved: boolean | null
    userId: number | null
    milestoneId: number | null
  }

  export type MilestoneVoteCountAggregateOutputType = {
    id: number
    approved: number
    userId: number
    milestoneId: number
    _all: number
  }


  export type MilestoneVoteAvgAggregateInputType = {
    id?: true
    userId?: true
    milestoneId?: true
  }

  export type MilestoneVoteSumAggregateInputType = {
    id?: true
    userId?: true
    milestoneId?: true
  }

  export type MilestoneVoteMinAggregateInputType = {
    id?: true
    approved?: true
    userId?: true
    milestoneId?: true
  }

  export type MilestoneVoteMaxAggregateInputType = {
    id?: true
    approved?: true
    userId?: true
    milestoneId?: true
  }

  export type MilestoneVoteCountAggregateInputType = {
    id?: true
    approved?: true
    userId?: true
    milestoneId?: true
    _all?: true
  }

  export type MilestoneVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MilestoneVote to aggregate.
     */
    where?: MilestoneVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MilestoneVotes to fetch.
     */
    orderBy?: MilestoneVoteOrderByWithRelationInput | MilestoneVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MilestoneVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MilestoneVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MilestoneVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MilestoneVotes
    **/
    _count?: true | MilestoneVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneVoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneVoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneVoteMaxAggregateInputType
  }

  export type GetMilestoneVoteAggregateType<T extends MilestoneVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestoneVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestoneVote[P]>
      : GetScalarType<T[P], AggregateMilestoneVote[P]>
  }




  export type MilestoneVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MilestoneVoteWhereInput
    orderBy?: MilestoneVoteOrderByWithAggregationInput | MilestoneVoteOrderByWithAggregationInput[]
    by: MilestoneVoteScalarFieldEnum[] | MilestoneVoteScalarFieldEnum
    having?: MilestoneVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneVoteCountAggregateInputType | true
    _avg?: MilestoneVoteAvgAggregateInputType
    _sum?: MilestoneVoteSumAggregateInputType
    _min?: MilestoneVoteMinAggregateInputType
    _max?: MilestoneVoteMaxAggregateInputType
  }

  export type MilestoneVoteGroupByOutputType = {
    id: number
    approved: boolean
    userId: number
    milestoneId: number
    _count: MilestoneVoteCountAggregateOutputType | null
    _avg: MilestoneVoteAvgAggregateOutputType | null
    _sum: MilestoneVoteSumAggregateOutputType | null
    _min: MilestoneVoteMinAggregateOutputType | null
    _max: MilestoneVoteMaxAggregateOutputType | null
  }

  type GetMilestoneVoteGroupByPayload<T extends MilestoneVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MilestoneVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneVoteGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneVoteGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    approved?: boolean
    userId?: boolean
    milestoneId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestoneVote"]>

  export type MilestoneVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    approved?: boolean
    userId?: boolean
    milestoneId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestoneVote"]>

  export type MilestoneVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    approved?: boolean
    userId?: boolean
    milestoneId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["milestoneVote"]>

  export type MilestoneVoteSelectScalar = {
    id?: boolean
    approved?: boolean
    userId?: boolean
    milestoneId?: boolean
  }

  export type MilestoneVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "approved" | "userId" | "milestoneId", ExtArgs["result"]["milestoneVote"]>
  export type MilestoneVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }
  export type MilestoneVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }
  export type MilestoneVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    milestone?: boolean | MilestoneDefaultArgs<ExtArgs>
  }

  export type $MilestoneVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MilestoneVote"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      milestone: Prisma.$MilestonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      approved: boolean
      userId: number
      milestoneId: number
    }, ExtArgs["result"]["milestoneVote"]>
    composites: {}
  }

  type MilestoneVoteGetPayload<S extends boolean | null | undefined | MilestoneVoteDefaultArgs> = $Result.GetResult<Prisma.$MilestoneVotePayload, S>

  type MilestoneVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MilestoneVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MilestoneVoteCountAggregateInputType | true
    }

  export interface MilestoneVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MilestoneVote'], meta: { name: 'MilestoneVote' } }
    /**
     * Find zero or one MilestoneVote that matches the filter.
     * @param {MilestoneVoteFindUniqueArgs} args - Arguments to find a MilestoneVote
     * @example
     * // Get one MilestoneVote
     * const milestoneVote = await prisma.milestoneVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MilestoneVoteFindUniqueArgs>(args: SelectSubset<T, MilestoneVoteFindUniqueArgs<ExtArgs>>): Prisma__MilestoneVoteClient<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MilestoneVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MilestoneVoteFindUniqueOrThrowArgs} args - Arguments to find a MilestoneVote
     * @example
     * // Get one MilestoneVote
     * const milestoneVote = await prisma.milestoneVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MilestoneVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, MilestoneVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MilestoneVoteClient<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MilestoneVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneVoteFindFirstArgs} args - Arguments to find a MilestoneVote
     * @example
     * // Get one MilestoneVote
     * const milestoneVote = await prisma.milestoneVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MilestoneVoteFindFirstArgs>(args?: SelectSubset<T, MilestoneVoteFindFirstArgs<ExtArgs>>): Prisma__MilestoneVoteClient<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MilestoneVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneVoteFindFirstOrThrowArgs} args - Arguments to find a MilestoneVote
     * @example
     * // Get one MilestoneVote
     * const milestoneVote = await prisma.milestoneVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MilestoneVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, MilestoneVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__MilestoneVoteClient<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MilestoneVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MilestoneVotes
     * const milestoneVotes = await prisma.milestoneVote.findMany()
     * 
     * // Get first 10 MilestoneVotes
     * const milestoneVotes = await prisma.milestoneVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneVoteWithIdOnly = await prisma.milestoneVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MilestoneVoteFindManyArgs>(args?: SelectSubset<T, MilestoneVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MilestoneVote.
     * @param {MilestoneVoteCreateArgs} args - Arguments to create a MilestoneVote.
     * @example
     * // Create one MilestoneVote
     * const MilestoneVote = await prisma.milestoneVote.create({
     *   data: {
     *     // ... data to create a MilestoneVote
     *   }
     * })
     * 
     */
    create<T extends MilestoneVoteCreateArgs>(args: SelectSubset<T, MilestoneVoteCreateArgs<ExtArgs>>): Prisma__MilestoneVoteClient<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MilestoneVotes.
     * @param {MilestoneVoteCreateManyArgs} args - Arguments to create many MilestoneVotes.
     * @example
     * // Create many MilestoneVotes
     * const milestoneVote = await prisma.milestoneVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MilestoneVoteCreateManyArgs>(args?: SelectSubset<T, MilestoneVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MilestoneVotes and returns the data saved in the database.
     * @param {MilestoneVoteCreateManyAndReturnArgs} args - Arguments to create many MilestoneVotes.
     * @example
     * // Create many MilestoneVotes
     * const milestoneVote = await prisma.milestoneVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MilestoneVotes and only return the `id`
     * const milestoneVoteWithIdOnly = await prisma.milestoneVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MilestoneVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, MilestoneVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MilestoneVote.
     * @param {MilestoneVoteDeleteArgs} args - Arguments to delete one MilestoneVote.
     * @example
     * // Delete one MilestoneVote
     * const MilestoneVote = await prisma.milestoneVote.delete({
     *   where: {
     *     // ... filter to delete one MilestoneVote
     *   }
     * })
     * 
     */
    delete<T extends MilestoneVoteDeleteArgs>(args: SelectSubset<T, MilestoneVoteDeleteArgs<ExtArgs>>): Prisma__MilestoneVoteClient<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MilestoneVote.
     * @param {MilestoneVoteUpdateArgs} args - Arguments to update one MilestoneVote.
     * @example
     * // Update one MilestoneVote
     * const milestoneVote = await prisma.milestoneVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MilestoneVoteUpdateArgs>(args: SelectSubset<T, MilestoneVoteUpdateArgs<ExtArgs>>): Prisma__MilestoneVoteClient<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MilestoneVotes.
     * @param {MilestoneVoteDeleteManyArgs} args - Arguments to filter MilestoneVotes to delete.
     * @example
     * // Delete a few MilestoneVotes
     * const { count } = await prisma.milestoneVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MilestoneVoteDeleteManyArgs>(args?: SelectSubset<T, MilestoneVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MilestoneVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MilestoneVotes
     * const milestoneVote = await prisma.milestoneVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MilestoneVoteUpdateManyArgs>(args: SelectSubset<T, MilestoneVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MilestoneVotes and returns the data updated in the database.
     * @param {MilestoneVoteUpdateManyAndReturnArgs} args - Arguments to update many MilestoneVotes.
     * @example
     * // Update many MilestoneVotes
     * const milestoneVote = await prisma.milestoneVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MilestoneVotes and only return the `id`
     * const milestoneVoteWithIdOnly = await prisma.milestoneVote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MilestoneVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, MilestoneVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MilestoneVote.
     * @param {MilestoneVoteUpsertArgs} args - Arguments to update or create a MilestoneVote.
     * @example
     * // Update or create a MilestoneVote
     * const milestoneVote = await prisma.milestoneVote.upsert({
     *   create: {
     *     // ... data to create a MilestoneVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MilestoneVote we want to update
     *   }
     * })
     */
    upsert<T extends MilestoneVoteUpsertArgs>(args: SelectSubset<T, MilestoneVoteUpsertArgs<ExtArgs>>): Prisma__MilestoneVoteClient<$Result.GetResult<Prisma.$MilestoneVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MilestoneVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneVoteCountArgs} args - Arguments to filter MilestoneVotes to count.
     * @example
     * // Count the number of MilestoneVotes
     * const count = await prisma.milestoneVote.count({
     *   where: {
     *     // ... the filter for the MilestoneVotes we want to count
     *   }
     * })
    **/
    count<T extends MilestoneVoteCountArgs>(
      args?: Subset<T, MilestoneVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MilestoneVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MilestoneVoteAggregateArgs>(args: Subset<T, MilestoneVoteAggregateArgs>): Prisma.PrismaPromise<GetMilestoneVoteAggregateType<T>>

    /**
     * Group by MilestoneVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MilestoneVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneVoteGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MilestoneVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MilestoneVote model
   */
  readonly fields: MilestoneVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MilestoneVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MilestoneVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    milestone<T extends MilestoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MilestoneDefaultArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MilestoneVote model
   */
  interface MilestoneVoteFieldRefs {
    readonly id: FieldRef<"MilestoneVote", 'Int'>
    readonly approved: FieldRef<"MilestoneVote", 'Boolean'>
    readonly userId: FieldRef<"MilestoneVote", 'Int'>
    readonly milestoneId: FieldRef<"MilestoneVote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MilestoneVote findUnique
   */
  export type MilestoneVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneVote to fetch.
     */
    where: MilestoneVoteWhereUniqueInput
  }

  /**
   * MilestoneVote findUniqueOrThrow
   */
  export type MilestoneVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneVote to fetch.
     */
    where: MilestoneVoteWhereUniqueInput
  }

  /**
   * MilestoneVote findFirst
   */
  export type MilestoneVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneVote to fetch.
     */
    where?: MilestoneVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MilestoneVotes to fetch.
     */
    orderBy?: MilestoneVoteOrderByWithRelationInput | MilestoneVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MilestoneVotes.
     */
    cursor?: MilestoneVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MilestoneVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MilestoneVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MilestoneVotes.
     */
    distinct?: MilestoneVoteScalarFieldEnum | MilestoneVoteScalarFieldEnum[]
  }

  /**
   * MilestoneVote findFirstOrThrow
   */
  export type MilestoneVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneVote to fetch.
     */
    where?: MilestoneVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MilestoneVotes to fetch.
     */
    orderBy?: MilestoneVoteOrderByWithRelationInput | MilestoneVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MilestoneVotes.
     */
    cursor?: MilestoneVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MilestoneVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MilestoneVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MilestoneVotes.
     */
    distinct?: MilestoneVoteScalarFieldEnum | MilestoneVoteScalarFieldEnum[]
  }

  /**
   * MilestoneVote findMany
   */
  export type MilestoneVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    /**
     * Filter, which MilestoneVotes to fetch.
     */
    where?: MilestoneVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MilestoneVotes to fetch.
     */
    orderBy?: MilestoneVoteOrderByWithRelationInput | MilestoneVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MilestoneVotes.
     */
    cursor?: MilestoneVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MilestoneVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MilestoneVotes.
     */
    skip?: number
    distinct?: MilestoneVoteScalarFieldEnum | MilestoneVoteScalarFieldEnum[]
  }

  /**
   * MilestoneVote create
   */
  export type MilestoneVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a MilestoneVote.
     */
    data: XOR<MilestoneVoteCreateInput, MilestoneVoteUncheckedCreateInput>
  }

  /**
   * MilestoneVote createMany
   */
  export type MilestoneVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MilestoneVotes.
     */
    data: MilestoneVoteCreateManyInput | MilestoneVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MilestoneVote createManyAndReturn
   */
  export type MilestoneVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * The data used to create many MilestoneVotes.
     */
    data: MilestoneVoteCreateManyInput | MilestoneVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MilestoneVote update
   */
  export type MilestoneVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a MilestoneVote.
     */
    data: XOR<MilestoneVoteUpdateInput, MilestoneVoteUncheckedUpdateInput>
    /**
     * Choose, which MilestoneVote to update.
     */
    where: MilestoneVoteWhereUniqueInput
  }

  /**
   * MilestoneVote updateMany
   */
  export type MilestoneVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MilestoneVotes.
     */
    data: XOR<MilestoneVoteUpdateManyMutationInput, MilestoneVoteUncheckedUpdateManyInput>
    /**
     * Filter which MilestoneVotes to update
     */
    where?: MilestoneVoteWhereInput
    /**
     * Limit how many MilestoneVotes to update.
     */
    limit?: number
  }

  /**
   * MilestoneVote updateManyAndReturn
   */
  export type MilestoneVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * The data used to update MilestoneVotes.
     */
    data: XOR<MilestoneVoteUpdateManyMutationInput, MilestoneVoteUncheckedUpdateManyInput>
    /**
     * Filter which MilestoneVotes to update
     */
    where?: MilestoneVoteWhereInput
    /**
     * Limit how many MilestoneVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MilestoneVote upsert
   */
  export type MilestoneVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the MilestoneVote to update in case it exists.
     */
    where: MilestoneVoteWhereUniqueInput
    /**
     * In case the MilestoneVote found by the `where` argument doesn't exist, create a new MilestoneVote with this data.
     */
    create: XOR<MilestoneVoteCreateInput, MilestoneVoteUncheckedCreateInput>
    /**
     * In case the MilestoneVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MilestoneVoteUpdateInput, MilestoneVoteUncheckedUpdateInput>
  }

  /**
   * MilestoneVote delete
   */
  export type MilestoneVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
    /**
     * Filter which MilestoneVote to delete.
     */
    where: MilestoneVoteWhereUniqueInput
  }

  /**
   * MilestoneVote deleteMany
   */
  export type MilestoneVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MilestoneVotes to delete
     */
    where?: MilestoneVoteWhereInput
    /**
     * Limit how many MilestoneVotes to delete.
     */
    limit?: number
  }

  /**
   * MilestoneVote without action
   */
  export type MilestoneVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MilestoneVote
     */
    select?: MilestoneVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MilestoneVote
     */
    omit?: MilestoneVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneVoteInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
    campaignId: number | null
    milestoneId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: bigint | null
    userId: number | null
    campaignId: number | null
    milestoneId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    amount: bigint | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
    userId: number | null
    campaignId: number | null
    milestoneId: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    amount: bigint | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
    userId: number | null
    campaignId: number | null
    milestoneId: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    amount: number
    status: number
    createdAt: number
    userId: number
    campaignId: number
    milestoneId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    campaignId?: true
    milestoneId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    campaignId?: true
    milestoneId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    status?: true
    createdAt?: true
    userId?: true
    campaignId?: true
    milestoneId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    status?: true
    createdAt?: true
    userId?: true
    campaignId?: true
    milestoneId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    status?: true
    createdAt?: true
    userId?: true
    campaignId?: true
    milestoneId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    type: $Enums.TransactionType
    amount: bigint
    status: $Enums.TransactionStatus
    createdAt: Date
    userId: number
    campaignId: number
    milestoneId: number | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    campaignId?: boolean
    milestoneId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    milestone?: boolean | Transaction$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    campaignId?: boolean
    milestoneId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    milestone?: boolean | Transaction$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    campaignId?: boolean
    milestoneId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    milestone?: boolean | Transaction$milestoneArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    campaignId?: boolean
    milestoneId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "amount" | "status" | "createdAt" | "userId" | "campaignId" | "milestoneId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    milestone?: boolean | Transaction$milestoneArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    milestone?: boolean | Transaction$milestoneArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    milestone?: boolean | Transaction$milestoneArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
      milestone: Prisma.$MilestonePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.TransactionType
      amount: bigint
      status: $Enums.TransactionStatus
      createdAt: Date
      userId: number
      campaignId: number
      milestoneId: number | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    milestone<T extends Transaction$milestoneArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$milestoneArgs<ExtArgs>>): Prisma__MilestoneClient<$Result.GetResult<Prisma.$MilestonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly amount: FieldRef<"Transaction", 'BigInt'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly campaignId: FieldRef<"Transaction", 'Int'>
    readonly milestoneId: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.milestone
   */
  export type Transaction$milestoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Milestone
     */
    select?: MilestoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Milestone
     */
    omit?: MilestoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MilestoneInclude<ExtArgs> | null
    where?: MilestoneWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    contact: 'contact',
    password: 'password',
    address: 'address',
    refreshToken: 'refreshToken',
    email: 'email',
    purpose: 'purpose'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isActive: 'isActive',
    cstatus: 'cstatus',
    createdAt: 'createdAt',
    goalAmount: 'goalAmount',
    amountRaised: 'amountRaised',
    userId: 'userId'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt',
    userId: 'userId',
    campaignId: 'campaignId'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    amount: 'amount',
    proofUrl: 'proofUrl',
    status: 'status',
    createdAt: 'createdAt',
    campaignId: 'campaignId'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const MilestoneVoteScalarFieldEnum: {
    id: 'id',
    approved: 'approved',
    userId: 'userId',
    milestoneId: 'milestoneId'
  };

  export type MilestoneVoteScalarFieldEnum = (typeof MilestoneVoteScalarFieldEnum)[keyof typeof MilestoneVoteScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    userId: 'userId',
    campaignId: 'campaignId',
    milestoneId: 'milestoneId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'MilestoneStatus'
   */
  export type EnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus'>
    


  /**
   * Reference to a field of type 'MilestoneStatus[]'
   */
  export type ListEnumMilestoneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MilestoneStatus[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    contact?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    refreshToken?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    purpose?: StringNullableFilter<"User"> | string | null
    campaigns?: CampaignListRelationFilter
    donations?: DonationListRelationFilter
    transactions?: TransactionListRelationFilter
    votes?: MilestoneVoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    contact?: SortOrder
    password?: SortOrder
    address?: SortOrder
    refreshToken?: SortOrder
    email?: SortOrder
    purpose?: SortOrderInput | SortOrder
    campaigns?: CampaignOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    votes?: MilestoneVoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    contact?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    refreshToken?: StringFilter<"User"> | string
    purpose?: StringNullableFilter<"User"> | string | null
    campaigns?: CampaignListRelationFilter
    donations?: DonationListRelationFilter
    transactions?: TransactionListRelationFilter
    votes?: MilestoneVoteListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    contact?: SortOrder
    password?: SortOrder
    address?: SortOrder
    refreshToken?: SortOrder
    email?: SortOrder
    purpose?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    contact?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    purpose?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: IntFilter<"Campaign"> | number
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    isActive?: BoolFilter<"Campaign"> | boolean
    cstatus?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    goalAmount?: BigIntFilter<"Campaign"> | bigint | number
    amountRaised?: BigIntFilter<"Campaign"> | bigint | number
    userId?: IntFilter<"Campaign"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    donations?: DonationListRelationFilter
    milestones?: MilestoneListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    cstatus?: SortOrder
    createdAt?: SortOrder
    goalAmount?: SortOrder
    amountRaised?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    donations?: DonationOrderByRelationAggregateInput
    milestones?: MilestoneOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    isActive?: BoolFilter<"Campaign"> | boolean
    cstatus?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    goalAmount?: BigIntFilter<"Campaign"> | bigint | number
    amountRaised?: BigIntFilter<"Campaign"> | bigint | number
    userId?: IntFilter<"Campaign"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    donations?: DonationListRelationFilter
    milestones?: MilestoneListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    cstatus?: SortOrder
    createdAt?: SortOrder
    goalAmount?: SortOrder
    amountRaised?: SortOrder
    userId?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campaign"> | number
    title?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringWithAggregatesFilter<"Campaign"> | string
    isActive?: BoolWithAggregatesFilter<"Campaign"> | boolean
    cstatus?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    goalAmount?: BigIntWithAggregatesFilter<"Campaign"> | bigint | number
    amountRaised?: BigIntWithAggregatesFilter<"Campaign"> | bigint | number
    userId?: IntWithAggregatesFilter<"Campaign"> | number
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: IntFilter<"Donation"> | number
    amount?: BigIntFilter<"Donation"> | bigint | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    userId?: IntFilter<"Donation"> | number
    campaignId?: IntFilter<"Donation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    user?: UserOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    amount?: BigIntFilter<"Donation"> | bigint | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    userId?: IntFilter<"Donation"> | number
    campaignId?: IntFilter<"Donation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donation"> | number
    amount?: BigIntWithAggregatesFilter<"Donation"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    userId?: IntWithAggregatesFilter<"Donation"> | number
    campaignId?: IntWithAggregatesFilter<"Donation"> | number
  }

  export type MilestoneWhereInput = {
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    id?: IntFilter<"Milestone"> | number
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    amount?: BigIntFilter<"Milestone"> | bigint | number
    proofUrl?: StringNullableFilter<"Milestone"> | string | null
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    campaignId?: IntFilter<"Milestone"> | number
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    votes?: MilestoneVoteListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    proofUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    votes?: MilestoneVoteOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type MilestoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MilestoneWhereInput | MilestoneWhereInput[]
    OR?: MilestoneWhereInput[]
    NOT?: MilestoneWhereInput | MilestoneWhereInput[]
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    amount?: BigIntFilter<"Milestone"> | bigint | number
    proofUrl?: StringNullableFilter<"Milestone"> | string | null
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    campaignId?: IntFilter<"Milestone"> | number
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    votes?: MilestoneVoteListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    proofUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _avg?: MilestoneAvgOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
    _sum?: MilestoneSumOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    OR?: MilestoneScalarWhereWithAggregatesInput[]
    NOT?: MilestoneScalarWhereWithAggregatesInput | MilestoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Milestone"> | number
    title?: StringWithAggregatesFilter<"Milestone"> | string
    description?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    amount?: BigIntWithAggregatesFilter<"Milestone"> | bigint | number
    proofUrl?: StringNullableWithAggregatesFilter<"Milestone"> | string | null
    status?: EnumMilestoneStatusWithAggregatesFilter<"Milestone"> | $Enums.MilestoneStatus
    createdAt?: DateTimeWithAggregatesFilter<"Milestone"> | Date | string
    campaignId?: IntWithAggregatesFilter<"Milestone"> | number
  }

  export type MilestoneVoteWhereInput = {
    AND?: MilestoneVoteWhereInput | MilestoneVoteWhereInput[]
    OR?: MilestoneVoteWhereInput[]
    NOT?: MilestoneVoteWhereInput | MilestoneVoteWhereInput[]
    id?: IntFilter<"MilestoneVote"> | number
    approved?: BoolFilter<"MilestoneVote"> | boolean
    userId?: IntFilter<"MilestoneVote"> | number
    milestoneId?: IntFilter<"MilestoneVote"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
  }

  export type MilestoneVoteOrderByWithRelationInput = {
    id?: SortOrder
    approved?: SortOrder
    userId?: SortOrder
    milestoneId?: SortOrder
    user?: UserOrderByWithRelationInput
    milestone?: MilestoneOrderByWithRelationInput
  }

  export type MilestoneVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_milestoneId?: MilestoneVoteUserIdMilestoneIdCompoundUniqueInput
    AND?: MilestoneVoteWhereInput | MilestoneVoteWhereInput[]
    OR?: MilestoneVoteWhereInput[]
    NOT?: MilestoneVoteWhereInput | MilestoneVoteWhereInput[]
    approved?: BoolFilter<"MilestoneVote"> | boolean
    userId?: IntFilter<"MilestoneVote"> | number
    milestoneId?: IntFilter<"MilestoneVote"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    milestone?: XOR<MilestoneScalarRelationFilter, MilestoneWhereInput>
  }, "id" | "userId_milestoneId">

  export type MilestoneVoteOrderByWithAggregationInput = {
    id?: SortOrder
    approved?: SortOrder
    userId?: SortOrder
    milestoneId?: SortOrder
    _count?: MilestoneVoteCountOrderByAggregateInput
    _avg?: MilestoneVoteAvgOrderByAggregateInput
    _max?: MilestoneVoteMaxOrderByAggregateInput
    _min?: MilestoneVoteMinOrderByAggregateInput
    _sum?: MilestoneVoteSumOrderByAggregateInput
  }

  export type MilestoneVoteScalarWhereWithAggregatesInput = {
    AND?: MilestoneVoteScalarWhereWithAggregatesInput | MilestoneVoteScalarWhereWithAggregatesInput[]
    OR?: MilestoneVoteScalarWhereWithAggregatesInput[]
    NOT?: MilestoneVoteScalarWhereWithAggregatesInput | MilestoneVoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MilestoneVote"> | number
    approved?: BoolWithAggregatesFilter<"MilestoneVote"> | boolean
    userId?: IntWithAggregatesFilter<"MilestoneVote"> | number
    milestoneId?: IntWithAggregatesFilter<"MilestoneVote"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: BigIntFilter<"Transaction"> | bigint | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    campaignId?: IntFilter<"Transaction"> | number
    milestoneId?: IntNullableFilter<"Transaction"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    milestone?: XOR<MilestoneNullableScalarRelationFilter, MilestoneWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    milestoneId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
    milestone?: MilestoneOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: BigIntFilter<"Transaction"> | bigint | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    campaignId?: IntFilter<"Transaction"> | number
    milestoneId?: IntNullableFilter<"Transaction"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    milestone?: XOR<MilestoneNullableScalarRelationFilter, MilestoneWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    milestoneId?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    amount?: BigIntWithAggregatesFilter<"Transaction"> | bigint | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    campaignId?: IntWithAggregatesFilter<"Transaction"> | number
    milestoneId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
  }

  export type UserCreateInput = {
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    votes?: MilestoneVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    votes?: MilestoneVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    votes?: MilestoneVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    votes?: MilestoneVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
  }

  export type UserUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampaignCreateInput = {
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    user: UserCreateNestedOneWithoutCampaignsInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
    milestones?: MilestoneCreateNestedManyWithoutCampaignInput
    transactions?: TransactionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    userId: number
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCampaignInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
    milestones?: MilestoneUpdateManyWithoutCampaignNestedInput
    transactions?: TransactionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutCampaignNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: number
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    userId: number
  }

  export type CampaignUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DonationCreateInput = {
    amount: bigint | number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDonationsInput
    campaign: CampaignCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateInput = {
    id?: number
    amount: bigint | number
    createdAt?: Date | string
    userId: number
    campaignId: number
  }

  export type DonationUpdateInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDonationsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
  }

  export type DonationCreateManyInput = {
    id?: number
    amount: bigint | number
    createdAt?: Date | string
    userId: number
    campaignId: number
  }

  export type DonationUpdateManyMutationInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneCreateInput = {
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutMilestonesInput
    votes?: MilestoneVoteCreateNestedManyWithoutMilestoneInput
    transactions?: TransactionCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    campaignId: number
    votes?: MilestoneVoteUncheckedCreateNestedManyWithoutMilestoneInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutMilestonesNestedInput
    votes?: MilestoneVoteUpdateManyWithoutMilestoneNestedInput
    transactions?: TransactionUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    votes?: MilestoneVoteUncheckedUpdateManyWithoutMilestoneNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    campaignId: number
  }

  export type MilestoneUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneVoteCreateInput = {
    approved: boolean
    user: UserCreateNestedOneWithoutVotesInput
    milestone: MilestoneCreateNestedOneWithoutVotesInput
  }

  export type MilestoneVoteUncheckedCreateInput = {
    id?: number
    approved: boolean
    userId: number
    milestoneId: number
  }

  export type MilestoneVoteUpdateInput = {
    approved?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
    milestone?: MilestoneUpdateOneRequiredWithoutVotesNestedInput
  }

  export type MilestoneVoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    milestoneId?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneVoteCreateManyInput = {
    id?: number
    approved: boolean
    userId: number
    milestoneId: number
  }

  export type MilestoneVoteUpdateManyMutationInput = {
    approved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MilestoneVoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    milestoneId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    campaign: CampaignCreateNestedOneWithoutTransactionsInput
    milestone?: MilestoneCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    userId: number
    campaignId: number
    milestoneId?: number | null
  }

  export type TransactionUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutTransactionsNestedInput
    milestone?: MilestoneUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    milestoneId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionCreateManyInput = {
    id?: number
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    userId: number
    campaignId: number
    milestoneId?: number | null
  }

  export type TransactionUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    milestoneId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type MilestoneVoteListRelationFilter = {
    every?: MilestoneVoteWhereInput
    some?: MilestoneVoteWhereInput
    none?: MilestoneVoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MilestoneVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    contact?: SortOrder
    password?: SortOrder
    address?: SortOrder
    refreshToken?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    contact?: SortOrder
    password?: SortOrder
    address?: SortOrder
    refreshToken?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    contact?: SortOrder
    password?: SortOrder
    address?: SortOrder
    refreshToken?: SortOrder
    email?: SortOrder
    purpose?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    cstatus?: SortOrder
    createdAt?: SortOrder
    goalAmount?: SortOrder
    amountRaised?: SortOrder
    userId?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    id?: SortOrder
    goalAmount?: SortOrder
    amountRaised?: SortOrder
    userId?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    cstatus?: SortOrder
    createdAt?: SortOrder
    goalAmount?: SortOrder
    amountRaised?: SortOrder
    userId?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    cstatus?: SortOrder
    createdAt?: SortOrder
    goalAmount?: SortOrder
    amountRaised?: SortOrder
    userId?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    id?: SortOrder
    goalAmount?: SortOrder
    amountRaised?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type EnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    proofUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
  }

  export type MilestoneAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    campaignId?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    proofUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    proofUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    campaignId?: SortOrder
  }

  export type MilestoneSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    campaignId?: SortOrder
  }

  export type EnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneStatusFilter<$PrismaModel>
    _max?: NestedEnumMilestoneStatusFilter<$PrismaModel>
  }

  export type MilestoneScalarRelationFilter = {
    is?: MilestoneWhereInput
    isNot?: MilestoneWhereInput
  }

  export type MilestoneVoteUserIdMilestoneIdCompoundUniqueInput = {
    userId: number
    milestoneId: number
  }

  export type MilestoneVoteCountOrderByAggregateInput = {
    id?: SortOrder
    approved?: SortOrder
    userId?: SortOrder
    milestoneId?: SortOrder
  }

  export type MilestoneVoteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    milestoneId?: SortOrder
  }

  export type MilestoneVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    approved?: SortOrder
    userId?: SortOrder
    milestoneId?: SortOrder
  }

  export type MilestoneVoteMinOrderByAggregateInput = {
    id?: SortOrder
    approved?: SortOrder
    userId?: SortOrder
    milestoneId?: SortOrder
  }

  export type MilestoneVoteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    milestoneId?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MilestoneNullableScalarRelationFilter = {
    is?: MilestoneWhereInput | null
    isNot?: MilestoneWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    milestoneId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    milestoneId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    milestoneId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    milestoneId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    milestoneId?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CampaignCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutUserInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MilestoneVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<MilestoneVoteCreateWithoutUserInput, MilestoneVoteUncheckedCreateWithoutUserInput> | MilestoneVoteCreateWithoutUserInput[] | MilestoneVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MilestoneVoteCreateOrConnectWithoutUserInput | MilestoneVoteCreateOrConnectWithoutUserInput[]
    createMany?: MilestoneVoteCreateManyUserInputEnvelope
    connect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MilestoneVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MilestoneVoteCreateWithoutUserInput, MilestoneVoteUncheckedCreateWithoutUserInput> | MilestoneVoteCreateWithoutUserInput[] | MilestoneVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MilestoneVoteCreateOrConnectWithoutUserInput | MilestoneVoteCreateOrConnectWithoutUserInput[]
    createMany?: MilestoneVoteCreateManyUserInputEnvelope
    connect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CampaignUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutUserInput | DonationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutUserInput | DonationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutUserInput | DonationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MilestoneVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<MilestoneVoteCreateWithoutUserInput, MilestoneVoteUncheckedCreateWithoutUserInput> | MilestoneVoteCreateWithoutUserInput[] | MilestoneVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MilestoneVoteCreateOrConnectWithoutUserInput | MilestoneVoteCreateOrConnectWithoutUserInput[]
    upsert?: MilestoneVoteUpsertWithWhereUniqueWithoutUserInput | MilestoneVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MilestoneVoteCreateManyUserInputEnvelope
    set?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    disconnect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    delete?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    connect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    update?: MilestoneVoteUpdateWithWhereUniqueWithoutUserInput | MilestoneVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MilestoneVoteUpdateManyWithWhereWithoutUserInput | MilestoneVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MilestoneVoteScalarWhereInput | MilestoneVoteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CampaignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutUserInput | DonationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutUserInput | DonationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutUserInput | DonationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MilestoneVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MilestoneVoteCreateWithoutUserInput, MilestoneVoteUncheckedCreateWithoutUserInput> | MilestoneVoteCreateWithoutUserInput[] | MilestoneVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MilestoneVoteCreateOrConnectWithoutUserInput | MilestoneVoteCreateOrConnectWithoutUserInput[]
    upsert?: MilestoneVoteUpsertWithWhereUniqueWithoutUserInput | MilestoneVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MilestoneVoteCreateManyUserInputEnvelope
    set?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    disconnect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    delete?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    connect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    update?: MilestoneVoteUpdateWithWhereUniqueWithoutUserInput | MilestoneVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MilestoneVoteUpdateManyWithWhereWithoutUserInput | MilestoneVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MilestoneVoteScalarWhereInput | MilestoneVoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type DonationCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type MilestoneCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MilestoneCreateWithoutCampaignInput, MilestoneUncheckedCreateWithoutCampaignInput> | MilestoneCreateWithoutCampaignInput[] | MilestoneUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutCampaignInput | MilestoneCreateOrConnectWithoutCampaignInput[]
    createMany?: MilestoneCreateManyCampaignInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCampaignInput = {
    create?: XOR<TransactionCreateWithoutCampaignInput, TransactionUncheckedCreateWithoutCampaignInput> | TransactionCreateWithoutCampaignInput[] | TransactionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCampaignInput | TransactionCreateOrConnectWithoutCampaignInput[]
    createMany?: TransactionCreateManyCampaignInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type MilestoneUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MilestoneCreateWithoutCampaignInput, MilestoneUncheckedCreateWithoutCampaignInput> | MilestoneCreateWithoutCampaignInput[] | MilestoneUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutCampaignInput | MilestoneCreateOrConnectWithoutCampaignInput[]
    createMany?: MilestoneCreateManyCampaignInputEnvelope
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<TransactionCreateWithoutCampaignInput, TransactionUncheckedCreateWithoutCampaignInput> | TransactionCreateWithoutCampaignInput[] | TransactionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCampaignInput | TransactionCreateOrConnectWithoutCampaignInput[]
    createMany?: TransactionCreateManyCampaignInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type DonationUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutCampaignInput | DonationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutCampaignInput | DonationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutCampaignInput | DonationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type MilestoneUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MilestoneCreateWithoutCampaignInput, MilestoneUncheckedCreateWithoutCampaignInput> | MilestoneCreateWithoutCampaignInput[] | MilestoneUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutCampaignInput | MilestoneCreateOrConnectWithoutCampaignInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutCampaignInput | MilestoneUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MilestoneCreateManyCampaignInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutCampaignInput | MilestoneUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutCampaignInput | MilestoneUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<TransactionCreateWithoutCampaignInput, TransactionUncheckedCreateWithoutCampaignInput> | TransactionCreateWithoutCampaignInput[] | TransactionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCampaignInput | TransactionCreateOrConnectWithoutCampaignInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCampaignInput | TransactionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: TransactionCreateManyCampaignInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCampaignInput | TransactionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCampaignInput | TransactionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput> | DonationCreateWithoutCampaignInput[] | DonationUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutCampaignInput | DonationCreateOrConnectWithoutCampaignInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutCampaignInput | DonationUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: DonationCreateManyCampaignInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutCampaignInput | DonationUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutCampaignInput | DonationUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type MilestoneUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MilestoneCreateWithoutCampaignInput, MilestoneUncheckedCreateWithoutCampaignInput> | MilestoneCreateWithoutCampaignInput[] | MilestoneUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MilestoneCreateOrConnectWithoutCampaignInput | MilestoneCreateOrConnectWithoutCampaignInput[]
    upsert?: MilestoneUpsertWithWhereUniqueWithoutCampaignInput | MilestoneUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MilestoneCreateManyCampaignInputEnvelope
    set?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    disconnect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    delete?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    connect?: MilestoneWhereUniqueInput | MilestoneWhereUniqueInput[]
    update?: MilestoneUpdateWithWhereUniqueWithoutCampaignInput | MilestoneUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MilestoneUpdateManyWithWhereWithoutCampaignInput | MilestoneUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<TransactionCreateWithoutCampaignInput, TransactionUncheckedCreateWithoutCampaignInput> | TransactionCreateWithoutCampaignInput[] | TransactionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCampaignInput | TransactionCreateOrConnectWithoutCampaignInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCampaignInput | TransactionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: TransactionCreateManyCampaignInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCampaignInput | TransactionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCampaignInput | TransactionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDonationsInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutDonationsInput = {
    create?: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonationsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    upsert?: UserUpsertWithoutDonationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsInput, UserUpdateWithoutDonationsInput>, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type CampaignUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutDonationsInput
    upsert?: CampaignUpsertWithoutDonationsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutDonationsInput, CampaignUpdateWithoutDonationsInput>, CampaignUncheckedUpdateWithoutDonationsInput>
  }

  export type CampaignCreateNestedOneWithoutMilestonesInput = {
    create?: XOR<CampaignCreateWithoutMilestonesInput, CampaignUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMilestonesInput
    connect?: CampaignWhereUniqueInput
  }

  export type MilestoneVoteCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<MilestoneVoteCreateWithoutMilestoneInput, MilestoneVoteUncheckedCreateWithoutMilestoneInput> | MilestoneVoteCreateWithoutMilestoneInput[] | MilestoneVoteUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: MilestoneVoteCreateOrConnectWithoutMilestoneInput | MilestoneVoteCreateOrConnectWithoutMilestoneInput[]
    createMany?: MilestoneVoteCreateManyMilestoneInputEnvelope
    connect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<TransactionCreateWithoutMilestoneInput, TransactionUncheckedCreateWithoutMilestoneInput> | TransactionCreateWithoutMilestoneInput[] | TransactionUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutMilestoneInput | TransactionCreateOrConnectWithoutMilestoneInput[]
    createMany?: TransactionCreateManyMilestoneInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type MilestoneVoteUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<MilestoneVoteCreateWithoutMilestoneInput, MilestoneVoteUncheckedCreateWithoutMilestoneInput> | MilestoneVoteCreateWithoutMilestoneInput[] | MilestoneVoteUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: MilestoneVoteCreateOrConnectWithoutMilestoneInput | MilestoneVoteCreateOrConnectWithoutMilestoneInput[]
    createMany?: MilestoneVoteCreateManyMilestoneInputEnvelope
    connect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutMilestoneInput = {
    create?: XOR<TransactionCreateWithoutMilestoneInput, TransactionUncheckedCreateWithoutMilestoneInput> | TransactionCreateWithoutMilestoneInput[] | TransactionUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutMilestoneInput | TransactionCreateOrConnectWithoutMilestoneInput[]
    createMany?: TransactionCreateManyMilestoneInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumMilestoneStatusFieldUpdateOperationsInput = {
    set?: $Enums.MilestoneStatus
  }

  export type CampaignUpdateOneRequiredWithoutMilestonesNestedInput = {
    create?: XOR<CampaignCreateWithoutMilestonesInput, CampaignUncheckedCreateWithoutMilestonesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMilestonesInput
    upsert?: CampaignUpsertWithoutMilestonesInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutMilestonesInput, CampaignUpdateWithoutMilestonesInput>, CampaignUncheckedUpdateWithoutMilestonesInput>
  }

  export type MilestoneVoteUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<MilestoneVoteCreateWithoutMilestoneInput, MilestoneVoteUncheckedCreateWithoutMilestoneInput> | MilestoneVoteCreateWithoutMilestoneInput[] | MilestoneVoteUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: MilestoneVoteCreateOrConnectWithoutMilestoneInput | MilestoneVoteCreateOrConnectWithoutMilestoneInput[]
    upsert?: MilestoneVoteUpsertWithWhereUniqueWithoutMilestoneInput | MilestoneVoteUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: MilestoneVoteCreateManyMilestoneInputEnvelope
    set?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    disconnect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    delete?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    connect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    update?: MilestoneVoteUpdateWithWhereUniqueWithoutMilestoneInput | MilestoneVoteUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: MilestoneVoteUpdateManyWithWhereWithoutMilestoneInput | MilestoneVoteUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: MilestoneVoteScalarWhereInput | MilestoneVoteScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<TransactionCreateWithoutMilestoneInput, TransactionUncheckedCreateWithoutMilestoneInput> | TransactionCreateWithoutMilestoneInput[] | TransactionUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutMilestoneInput | TransactionCreateOrConnectWithoutMilestoneInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutMilestoneInput | TransactionUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: TransactionCreateManyMilestoneInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutMilestoneInput | TransactionUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutMilestoneInput | TransactionUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type MilestoneVoteUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<MilestoneVoteCreateWithoutMilestoneInput, MilestoneVoteUncheckedCreateWithoutMilestoneInput> | MilestoneVoteCreateWithoutMilestoneInput[] | MilestoneVoteUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: MilestoneVoteCreateOrConnectWithoutMilestoneInput | MilestoneVoteCreateOrConnectWithoutMilestoneInput[]
    upsert?: MilestoneVoteUpsertWithWhereUniqueWithoutMilestoneInput | MilestoneVoteUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: MilestoneVoteCreateManyMilestoneInputEnvelope
    set?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    disconnect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    delete?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    connect?: MilestoneVoteWhereUniqueInput | MilestoneVoteWhereUniqueInput[]
    update?: MilestoneVoteUpdateWithWhereUniqueWithoutMilestoneInput | MilestoneVoteUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: MilestoneVoteUpdateManyWithWhereWithoutMilestoneInput | MilestoneVoteUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: MilestoneVoteScalarWhereInput | MilestoneVoteScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutMilestoneNestedInput = {
    create?: XOR<TransactionCreateWithoutMilestoneInput, TransactionUncheckedCreateWithoutMilestoneInput> | TransactionCreateWithoutMilestoneInput[] | TransactionUncheckedCreateWithoutMilestoneInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutMilestoneInput | TransactionCreateOrConnectWithoutMilestoneInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutMilestoneInput | TransactionUpsertWithWhereUniqueWithoutMilestoneInput[]
    createMany?: TransactionCreateManyMilestoneInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutMilestoneInput | TransactionUpdateWithWhereUniqueWithoutMilestoneInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutMilestoneInput | TransactionUpdateManyWithWhereWithoutMilestoneInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVotesInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    connect?: UserWhereUniqueInput
  }

  export type MilestoneCreateNestedOneWithoutVotesInput = {
    create?: XOR<MilestoneCreateWithoutVotesInput, MilestoneUncheckedCreateWithoutVotesInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutVotesInput
    connect?: MilestoneWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput
    upsert?: UserUpsertWithoutVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVotesInput, UserUpdateWithoutVotesInput>, UserUncheckedUpdateWithoutVotesInput>
  }

  export type MilestoneUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<MilestoneCreateWithoutVotesInput, MilestoneUncheckedCreateWithoutVotesInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutVotesInput
    upsert?: MilestoneUpsertWithoutVotesInput
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutVotesInput, MilestoneUpdateWithoutVotesInput>, MilestoneUncheckedUpdateWithoutVotesInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CampaignCreateWithoutTransactionsInput, CampaignUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutTransactionsInput
    connect?: CampaignWhereUniqueInput
  }

  export type MilestoneCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<MilestoneCreateWithoutTransactionsInput, MilestoneUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutTransactionsInput
    connect?: MilestoneWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type CampaignUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CampaignCreateWithoutTransactionsInput, CampaignUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutTransactionsInput
    upsert?: CampaignUpsertWithoutTransactionsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutTransactionsInput, CampaignUpdateWithoutTransactionsInput>, CampaignUncheckedUpdateWithoutTransactionsInput>
  }

  export type MilestoneUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<MilestoneCreateWithoutTransactionsInput, MilestoneUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: MilestoneCreateOrConnectWithoutTransactionsInput
    upsert?: MilestoneUpsertWithoutTransactionsInput
    disconnect?: MilestoneWhereInput | boolean
    delete?: MilestoneWhereInput | boolean
    connect?: MilestoneWhereUniqueInput
    update?: XOR<XOR<MilestoneUpdateToOneWithWhereWithoutTransactionsInput, MilestoneUpdateWithoutTransactionsInput>, MilestoneUncheckedUpdateWithoutTransactionsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumMilestoneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusFilter<$PrismaModel> | $Enums.MilestoneStatus
  }

  export type NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MilestoneStatus | EnumMilestoneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MilestoneStatus[] | ListEnumMilestoneStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMilestoneStatusWithAggregatesFilter<$PrismaModel> | $Enums.MilestoneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMilestoneStatusFilter<$PrismaModel>
    _max?: NestedEnumMilestoneStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CampaignCreateWithoutUserInput = {
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    donations?: DonationCreateNestedManyWithoutCampaignInput
    milestones?: MilestoneCreateNestedManyWithoutCampaignInput
    transactions?: TransactionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCampaignInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutUserInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignCreateManyUserInputEnvelope = {
    data: CampaignCreateManyUserInput | CampaignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutUserInput = {
    amount: bigint | number
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateWithoutUserInput = {
    id?: number
    amount: bigint | number
    createdAt?: Date | string
    campaignId: number
  }

  export type DonationCreateOrConnectWithoutUserInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput>
  }

  export type DonationCreateManyUserInputEnvelope = {
    data: DonationCreateManyUserInput | DonationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutTransactionsInput
    milestone?: MilestoneCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    campaignId: number
    milestoneId?: number | null
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MilestoneVoteCreateWithoutUserInput = {
    approved: boolean
    milestone: MilestoneCreateNestedOneWithoutVotesInput
  }

  export type MilestoneVoteUncheckedCreateWithoutUserInput = {
    id?: number
    approved: boolean
    milestoneId: number
  }

  export type MilestoneVoteCreateOrConnectWithoutUserInput = {
    where: MilestoneVoteWhereUniqueInput
    create: XOR<MilestoneVoteCreateWithoutUserInput, MilestoneVoteUncheckedCreateWithoutUserInput>
  }

  export type MilestoneVoteCreateManyUserInputEnvelope = {
    data: MilestoneVoteCreateManyUserInput | MilestoneVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
  }

  export type CampaignUpdateManyWithWhereWithoutUserInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutUserInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: IntFilter<"Campaign"> | number
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    isActive?: BoolFilter<"Campaign"> | boolean
    cstatus?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    goalAmount?: BigIntFilter<"Campaign"> | bigint | number
    amountRaised?: BigIntFilter<"Campaign"> | bigint | number
    userId?: IntFilter<"Campaign"> | number
  }

  export type DonationUpsertWithWhereUniqueWithoutUserInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutUserInput, DonationUncheckedUpdateWithoutUserInput>
    create: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutUserInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutUserInput, DonationUncheckedUpdateWithoutUserInput>
  }

  export type DonationUpdateManyWithWhereWithoutUserInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutUserInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: IntFilter<"Donation"> | number
    amount?: BigIntFilter<"Donation"> | bigint | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    userId?: IntFilter<"Donation"> | number
    campaignId?: IntFilter<"Donation"> | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: BigIntFilter<"Transaction"> | bigint | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    campaignId?: IntFilter<"Transaction"> | number
    milestoneId?: IntNullableFilter<"Transaction"> | number | null
  }

  export type MilestoneVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: MilestoneVoteWhereUniqueInput
    update: XOR<MilestoneVoteUpdateWithoutUserInput, MilestoneVoteUncheckedUpdateWithoutUserInput>
    create: XOR<MilestoneVoteCreateWithoutUserInput, MilestoneVoteUncheckedCreateWithoutUserInput>
  }

  export type MilestoneVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: MilestoneVoteWhereUniqueInput
    data: XOR<MilestoneVoteUpdateWithoutUserInput, MilestoneVoteUncheckedUpdateWithoutUserInput>
  }

  export type MilestoneVoteUpdateManyWithWhereWithoutUserInput = {
    where: MilestoneVoteScalarWhereInput
    data: XOR<MilestoneVoteUpdateManyMutationInput, MilestoneVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type MilestoneVoteScalarWhereInput = {
    AND?: MilestoneVoteScalarWhereInput | MilestoneVoteScalarWhereInput[]
    OR?: MilestoneVoteScalarWhereInput[]
    NOT?: MilestoneVoteScalarWhereInput | MilestoneVoteScalarWhereInput[]
    id?: IntFilter<"MilestoneVote"> | number
    approved?: BoolFilter<"MilestoneVote"> | boolean
    userId?: IntFilter<"MilestoneVote"> | number
    milestoneId?: IntFilter<"MilestoneVote"> | number
  }

  export type UserCreateWithoutCampaignsInput = {
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    donations?: DonationCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    votes?: MilestoneVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: number
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    votes?: MilestoneVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type DonationCreateWithoutCampaignInput = {
    amount: bigint | number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateWithoutCampaignInput = {
    id?: number
    amount: bigint | number
    createdAt?: Date | string
    userId: number
  }

  export type DonationCreateOrConnectWithoutCampaignInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput>
  }

  export type DonationCreateManyCampaignInputEnvelope = {
    data: DonationCreateManyCampaignInput | DonationCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type MilestoneCreateWithoutCampaignInput = {
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    votes?: MilestoneVoteCreateNestedManyWithoutMilestoneInput
    transactions?: TransactionCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutCampaignInput = {
    id?: number
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    votes?: MilestoneVoteUncheckedCreateNestedManyWithoutMilestoneInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutCampaignInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutCampaignInput, MilestoneUncheckedCreateWithoutCampaignInput>
  }

  export type MilestoneCreateManyCampaignInputEnvelope = {
    data: MilestoneCreateManyCampaignInput | MilestoneCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCampaignInput = {
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    milestone?: MilestoneCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCampaignInput = {
    id?: number
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    userId: number
    milestoneId?: number | null
  }

  export type TransactionCreateOrConnectWithoutCampaignInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCampaignInput, TransactionUncheckedCreateWithoutCampaignInput>
  }

  export type TransactionCreateManyCampaignInputEnvelope = {
    data: TransactionCreateManyCampaignInput | TransactionCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    donations?: DonationUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    votes?: MilestoneVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    votes?: MilestoneVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DonationUpsertWithWhereUniqueWithoutCampaignInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutCampaignInput, DonationUncheckedUpdateWithoutCampaignInput>
    create: XOR<DonationCreateWithoutCampaignInput, DonationUncheckedCreateWithoutCampaignInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutCampaignInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutCampaignInput, DonationUncheckedUpdateWithoutCampaignInput>
  }

  export type DonationUpdateManyWithWhereWithoutCampaignInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutCampaignInput>
  }

  export type MilestoneUpsertWithWhereUniqueWithoutCampaignInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutCampaignInput, MilestoneUncheckedUpdateWithoutCampaignInput>
    create: XOR<MilestoneCreateWithoutCampaignInput, MilestoneUncheckedCreateWithoutCampaignInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutCampaignInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutCampaignInput, MilestoneUncheckedUpdateWithoutCampaignInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutCampaignInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutCampaignInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    OR?: MilestoneScalarWhereInput[]
    NOT?: MilestoneScalarWhereInput | MilestoneScalarWhereInput[]
    id?: IntFilter<"Milestone"> | number
    title?: StringFilter<"Milestone"> | string
    description?: StringNullableFilter<"Milestone"> | string | null
    amount?: BigIntFilter<"Milestone"> | bigint | number
    proofUrl?: StringNullableFilter<"Milestone"> | string | null
    status?: EnumMilestoneStatusFilter<"Milestone"> | $Enums.MilestoneStatus
    createdAt?: DateTimeFilter<"Milestone"> | Date | string
    campaignId?: IntFilter<"Milestone"> | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutCampaignInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCampaignInput, TransactionUncheckedUpdateWithoutCampaignInput>
    create: XOR<TransactionCreateWithoutCampaignInput, TransactionUncheckedCreateWithoutCampaignInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCampaignInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCampaignInput, TransactionUncheckedUpdateWithoutCampaignInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCampaignInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCampaignInput>
  }

  export type UserCreateWithoutDonationsInput = {
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    votes?: MilestoneVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDonationsInput = {
    id?: number
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    votes?: MilestoneVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDonationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
  }

  export type CampaignCreateWithoutDonationsInput = {
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    user: UserCreateNestedOneWithoutCampaignsInput
    milestones?: MilestoneCreateNestedManyWithoutCampaignInput
    transactions?: TransactionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutDonationsInput = {
    id?: number
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    userId: number
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCampaignInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutDonationsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
  }

  export type UserUpsertWithoutDonationsInput = {
    update: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type UserUpdateWithoutDonationsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    votes?: MilestoneVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    votes?: MilestoneVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignUpsertWithoutDonationsInput = {
    update: XOR<CampaignUpdateWithoutDonationsInput, CampaignUncheckedUpdateWithoutDonationsInput>
    create: XOR<CampaignCreateWithoutDonationsInput, CampaignUncheckedCreateWithoutDonationsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutDonationsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutDonationsInput, CampaignUncheckedUpdateWithoutDonationsInput>
  }

  export type CampaignUpdateWithoutDonationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    milestones?: MilestoneUpdateManyWithoutCampaignNestedInput
    transactions?: TransactionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutDonationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    milestones?: MilestoneUncheckedUpdateManyWithoutCampaignNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateWithoutMilestonesInput = {
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    user: UserCreateNestedOneWithoutCampaignsInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
    transactions?: TransactionCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutMilestonesInput = {
    id?: number
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    userId: number
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutMilestonesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutMilestonesInput, CampaignUncheckedCreateWithoutMilestonesInput>
  }

  export type MilestoneVoteCreateWithoutMilestoneInput = {
    approved: boolean
    user: UserCreateNestedOneWithoutVotesInput
  }

  export type MilestoneVoteUncheckedCreateWithoutMilestoneInput = {
    id?: number
    approved: boolean
    userId: number
  }

  export type MilestoneVoteCreateOrConnectWithoutMilestoneInput = {
    where: MilestoneVoteWhereUniqueInput
    create: XOR<MilestoneVoteCreateWithoutMilestoneInput, MilestoneVoteUncheckedCreateWithoutMilestoneInput>
  }

  export type MilestoneVoteCreateManyMilestoneInputEnvelope = {
    data: MilestoneVoteCreateManyMilestoneInput | MilestoneVoteCreateManyMilestoneInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutMilestoneInput = {
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    campaign: CampaignCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutMilestoneInput = {
    id?: number
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    userId: number
    campaignId: number
  }

  export type TransactionCreateOrConnectWithoutMilestoneInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutMilestoneInput, TransactionUncheckedCreateWithoutMilestoneInput>
  }

  export type TransactionCreateManyMilestoneInputEnvelope = {
    data: TransactionCreateManyMilestoneInput | TransactionCreateManyMilestoneInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithoutMilestonesInput = {
    update: XOR<CampaignUpdateWithoutMilestonesInput, CampaignUncheckedUpdateWithoutMilestonesInput>
    create: XOR<CampaignCreateWithoutMilestonesInput, CampaignUncheckedCreateWithoutMilestonesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutMilestonesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutMilestonesInput, CampaignUncheckedUpdateWithoutMilestonesInput>
  }

  export type CampaignUpdateWithoutMilestonesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
    transactions?: TransactionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutMilestonesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type MilestoneVoteUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: MilestoneVoteWhereUniqueInput
    update: XOR<MilestoneVoteUpdateWithoutMilestoneInput, MilestoneVoteUncheckedUpdateWithoutMilestoneInput>
    create: XOR<MilestoneVoteCreateWithoutMilestoneInput, MilestoneVoteUncheckedCreateWithoutMilestoneInput>
  }

  export type MilestoneVoteUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: MilestoneVoteWhereUniqueInput
    data: XOR<MilestoneVoteUpdateWithoutMilestoneInput, MilestoneVoteUncheckedUpdateWithoutMilestoneInput>
  }

  export type MilestoneVoteUpdateManyWithWhereWithoutMilestoneInput = {
    where: MilestoneVoteScalarWhereInput
    data: XOR<MilestoneVoteUpdateManyMutationInput, MilestoneVoteUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutMilestoneInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutMilestoneInput, TransactionUncheckedUpdateWithoutMilestoneInput>
    create: XOR<TransactionCreateWithoutMilestoneInput, TransactionUncheckedCreateWithoutMilestoneInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutMilestoneInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutMilestoneInput, TransactionUncheckedUpdateWithoutMilestoneInput>
  }

  export type TransactionUpdateManyWithWhereWithoutMilestoneInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type UserCreateWithoutVotesInput = {
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVotesInput = {
    id?: number
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
  }

  export type MilestoneCreateWithoutVotesInput = {
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutMilestonesInput
    transactions?: TransactionCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutVotesInput = {
    id?: number
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    campaignId: number
    transactions?: TransactionUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutVotesInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutVotesInput, MilestoneUncheckedCreateWithoutVotesInput>
  }

  export type UserUpsertWithoutVotesInput = {
    update: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
    create: XOR<UserCreateWithoutVotesInput, UserUncheckedCreateWithoutVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVotesInput, UserUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateWithoutVotesInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MilestoneUpsertWithoutVotesInput = {
    update: XOR<MilestoneUpdateWithoutVotesInput, MilestoneUncheckedUpdateWithoutVotesInput>
    create: XOR<MilestoneCreateWithoutVotesInput, MilestoneUncheckedCreateWithoutVotesInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutVotesInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutVotesInput, MilestoneUncheckedUpdateWithoutVotesInput>
  }

  export type MilestoneUpdateWithoutVotesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutMilestonesNestedInput
    transactions?: TransactionUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutUserInput
    votes?: MilestoneVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    role?: $Enums.Role
    firstname: string
    lastname: string
    username: string
    contact: string
    password: string
    address: string
    refreshToken: string
    email: string
    purpose?: string | null
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    votes?: MilestoneVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type CampaignCreateWithoutTransactionsInput = {
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    user: UserCreateNestedOneWithoutCampaignsInput
    donations?: DonationCreateNestedManyWithoutCampaignInput
    milestones?: MilestoneCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutTransactionsInput = {
    id?: number
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
    userId: number
    donations?: DonationUncheckedCreateNestedManyWithoutCampaignInput
    milestones?: MilestoneUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutTransactionsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutTransactionsInput, CampaignUncheckedCreateWithoutTransactionsInput>
  }

  export type MilestoneCreateWithoutTransactionsInput = {
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutMilestonesInput
    votes?: MilestoneVoteCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateWithoutTransactionsInput = {
    id?: number
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
    campaignId: number
    votes?: MilestoneVoteUncheckedCreateNestedManyWithoutMilestoneInput
  }

  export type MilestoneCreateOrConnectWithoutTransactionsInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutTransactionsInput, MilestoneUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    votes?: MilestoneVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    votes?: MilestoneVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignUpsertWithoutTransactionsInput = {
    update: XOR<CampaignUpdateWithoutTransactionsInput, CampaignUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CampaignCreateWithoutTransactionsInput, CampaignUncheckedCreateWithoutTransactionsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutTransactionsInput, CampaignUncheckedUpdateWithoutTransactionsInput>
  }

  export type CampaignUpdateWithoutTransactionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    donations?: DonationUpdateManyWithoutCampaignNestedInput
    milestones?: MilestoneUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: IntFieldUpdateOperationsInput | number
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type MilestoneUpsertWithoutTransactionsInput = {
    update: XOR<MilestoneUpdateWithoutTransactionsInput, MilestoneUncheckedUpdateWithoutTransactionsInput>
    create: XOR<MilestoneCreateWithoutTransactionsInput, MilestoneUncheckedCreateWithoutTransactionsInput>
    where?: MilestoneWhereInput
  }

  export type MilestoneUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: MilestoneWhereInput
    data: XOR<MilestoneUpdateWithoutTransactionsInput, MilestoneUncheckedUpdateWithoutTransactionsInput>
  }

  export type MilestoneUpdateWithoutTransactionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutMilestonesNestedInput
    votes?: MilestoneVoteUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    votes?: MilestoneVoteUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type CampaignCreateManyUserInput = {
    id?: number
    title: string
    description: string
    isActive?: boolean
    cstatus?: $Enums.CampaignStatus
    createdAt?: Date | string
    goalAmount: bigint | number
    amountRaised: bigint | number
  }

  export type DonationCreateManyUserInput = {
    id?: number
    amount: bigint | number
    createdAt?: Date | string
    campaignId: number
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    campaignId: number
    milestoneId?: number | null
  }

  export type MilestoneVoteCreateManyUserInput = {
    id?: number
    approved: boolean
    milestoneId: number
  }

  export type CampaignUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    donations?: DonationUpdateManyWithoutCampaignNestedInput
    milestones?: MilestoneUpdateManyWithoutCampaignNestedInput
    transactions?: TransactionUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
    donations?: DonationUncheckedUpdateManyWithoutCampaignNestedInput
    milestones?: MilestoneUncheckedUpdateManyWithoutCampaignNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cstatus?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    amountRaised?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type DonationUpdateWithoutUserInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
  }

  export type DonationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutUserInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutTransactionsNestedInput
    milestone?: MilestoneUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    milestoneId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaignId?: IntFieldUpdateOperationsInput | number
    milestoneId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MilestoneVoteUpdateWithoutUserInput = {
    approved?: BoolFieldUpdateOperationsInput | boolean
    milestone?: MilestoneUpdateOneRequiredWithoutVotesNestedInput
  }

  export type MilestoneVoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    milestoneId?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneVoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    milestoneId?: IntFieldUpdateOperationsInput | number
  }

  export type DonationCreateManyCampaignInput = {
    id?: number
    amount: bigint | number
    createdAt?: Date | string
    userId: number
  }

  export type MilestoneCreateManyCampaignInput = {
    id?: number
    title: string
    description?: string | null
    amount: bigint | number
    proofUrl?: string | null
    status?: $Enums.MilestoneStatus
    createdAt?: Date | string
  }

  export type TransactionCreateManyCampaignInput = {
    id?: number
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    userId: number
    milestoneId?: number | null
  }

  export type DonationUpdateWithoutCampaignInput = {
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DonationUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneUpdateWithoutCampaignInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: MilestoneVoteUpdateManyWithoutMilestoneNestedInput
    transactions?: TransactionUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: MilestoneVoteUncheckedUpdateManyWithoutMilestoneNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMilestoneStatusFieldUpdateOperationsInput | $Enums.MilestoneStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutCampaignInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    milestone?: MilestoneUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    milestoneId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    milestoneId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MilestoneVoteCreateManyMilestoneInput = {
    id?: number
    approved: boolean
    userId: number
  }

  export type TransactionCreateManyMilestoneInput = {
    id?: number
    type: $Enums.TransactionType
    amount: bigint | number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    userId: number
    campaignId: number
  }

  export type MilestoneVoteUpdateWithoutMilestoneInput = {
    approved?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVotesNestedInput
  }

  export type MilestoneVoteUncheckedUpdateWithoutMilestoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MilestoneVoteUncheckedUpdateManyWithoutMilestoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutMilestoneInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutMilestoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyWithoutMilestoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}