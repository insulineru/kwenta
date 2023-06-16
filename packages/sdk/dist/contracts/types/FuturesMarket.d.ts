import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface FuturesMarketInterface extends utils.Interface {
    functions: {
        "accessibleMargin(address)": FunctionFragment;
        "accruedFunding(address)": FunctionFragment;
        "assetPrice()": FunctionFragment;
        "baseAsset()": FunctionFragment;
        "canLiquidate(address)": FunctionFragment;
        "cancelNextPriceOrder(address)": FunctionFragment;
        "closePosition()": FunctionFragment;
        "closePositionWithTracking(bytes32)": FunctionFragment;
        "currentFundingRate()": FunctionFragment;
        "executeNextPriceOrder(address)": FunctionFragment;
        "fundingLastRecomputed()": FunctionFragment;
        "fundingSequence(uint256)": FunctionFragment;
        "fundingSequenceLength()": FunctionFragment;
        "isResolverCached()": FunctionFragment;
        "liquidatePosition(address)": FunctionFragment;
        "liquidationFee(address)": FunctionFragment;
        "liquidationPrice(address)": FunctionFragment;
        "marketDebt()": FunctionFragment;
        "marketKey()": FunctionFragment;
        "marketSize()": FunctionFragment;
        "marketSizes()": FunctionFragment;
        "marketSkew()": FunctionFragment;
        "modifyPosition(int256)": FunctionFragment;
        "modifyPositionWithTracking(int256,bytes32)": FunctionFragment;
        "nextPriceOrders(address)": FunctionFragment;
        "notionalValue(address)": FunctionFragment;
        "orderFee(int256)": FunctionFragment;
        "positions(address)": FunctionFragment;
        "postTradeDetails(int256,address)": FunctionFragment;
        "profitLoss(address)": FunctionFragment;
        "rebuildCache()": FunctionFragment;
        "recomputeFunding()": FunctionFragment;
        "remainingMargin(address)": FunctionFragment;
        "resolver()": FunctionFragment;
        "resolverAddressesRequired()": FunctionFragment;
        "submitNextPriceOrder(int256)": FunctionFragment;
        "submitNextPriceOrderWithTracking(int256,bytes32)": FunctionFragment;
        "transferMargin(int256)": FunctionFragment;
        "unrecordedFunding()": FunctionFragment;
        "withdrawAllMargin()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessibleMargin" | "accruedFunding" | "assetPrice" | "baseAsset" | "canLiquidate" | "cancelNextPriceOrder" | "closePosition" | "closePositionWithTracking" | "currentFundingRate" | "executeNextPriceOrder" | "fundingLastRecomputed" | "fundingSequence" | "fundingSequenceLength" | "isResolverCached" | "liquidatePosition" | "liquidationFee" | "liquidationPrice" | "marketDebt" | "marketKey" | "marketSize" | "marketSizes" | "marketSkew" | "modifyPosition" | "modifyPositionWithTracking" | "nextPriceOrders" | "notionalValue" | "orderFee" | "positions" | "postTradeDetails" | "profitLoss" | "rebuildCache" | "recomputeFunding" | "remainingMargin" | "resolver" | "resolverAddressesRequired" | "submitNextPriceOrder" | "submitNextPriceOrderWithTracking" | "transferMargin" | "unrecordedFunding" | "withdrawAllMargin"): FunctionFragment;
    encodeFunctionData(functionFragment: "accessibleMargin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "accruedFunding", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "assetPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "canLiquidate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cancelNextPriceOrder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "closePosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "closePositionWithTracking", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "currentFundingRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "executeNextPriceOrder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fundingLastRecomputed", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundingSequence", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "fundingSequenceLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "isResolverCached", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidatePosition", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "liquidationFee", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "liquidationPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "marketDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketKey", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketSizes", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketSkew", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyPosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "modifyPositionWithTracking", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "nextPriceOrders", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "notionalValue", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "orderFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "positions", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "postTradeDetails", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "profitLoss", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rebuildCache", values?: undefined): string;
    encodeFunctionData(functionFragment: "recomputeFunding", values?: undefined): string;
    encodeFunctionData(functionFragment: "remainingMargin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "resolver", values?: undefined): string;
    encodeFunctionData(functionFragment: "resolverAddressesRequired", values?: undefined): string;
    encodeFunctionData(functionFragment: "submitNextPriceOrder", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "submitNextPriceOrderWithTracking", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferMargin", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unrecordedFunding", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawAllMargin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accessibleMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accruedFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canLiquidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelNextPriceOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePositionWithTracking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentFundingRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeNextPriceOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingLastRecomputed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingSequence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingSequenceLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isResolverCached", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidatePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketSizes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketSkew", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyPositionWithTracking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextPriceOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notionalValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postTradeDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "profitLoss", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebuildCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recomputeFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainingMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolverAddressesRequired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitNextPriceOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitNextPriceOrderWithTracking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unrecordedFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllMargin", data: BytesLike): Result;
    events: {
        "CacheUpdated(bytes32,address)": EventFragment;
        "FundingRecomputed(int256,uint256,uint256)": EventFragment;
        "FuturesTracking(bytes32,bytes32,bytes32,int256,uint256)": EventFragment;
        "MarginTransferred(address,int256)": EventFragment;
        "NextPriceOrderRemoved(address,uint256,int256,uint256,uint256,uint256,bytes32)": EventFragment;
        "NextPriceOrderSubmitted(address,int256,uint256,uint256,uint256,bytes32)": EventFragment;
        "PositionLiquidated(uint256,address,address,int256,uint256,uint256)": EventFragment;
        "PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CacheUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundingRecomputed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FuturesTracking"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarginTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NextPriceOrderRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NextPriceOrderSubmitted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionLiquidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionModified"): EventFragment;
}
export interface CacheUpdatedEventObject {
    name: string;
    destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[
    string,
    string
], CacheUpdatedEventObject>;
export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;
export interface FundingRecomputedEventObject {
    funding: BigNumber;
    index: BigNumber;
    timestamp: BigNumber;
}
export type FundingRecomputedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], FundingRecomputedEventObject>;
export type FundingRecomputedEventFilter = TypedEventFilter<FundingRecomputedEvent>;
export interface FuturesTrackingEventObject {
    trackingCode: string;
    baseAsset: string;
    marketKey: string;
    sizeDelta: BigNumber;
    fee: BigNumber;
}
export type FuturesTrackingEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], FuturesTrackingEventObject>;
export type FuturesTrackingEventFilter = TypedEventFilter<FuturesTrackingEvent>;
export interface MarginTransferredEventObject {
    account: string;
    marginDelta: BigNumber;
}
export type MarginTransferredEvent = TypedEvent<[
    string,
    BigNumber
], MarginTransferredEventObject>;
export type MarginTransferredEventFilter = TypedEventFilter<MarginTransferredEvent>;
export interface NextPriceOrderRemovedEventObject {
    account: string;
    currentRoundId: BigNumber;
    sizeDelta: BigNumber;
    targetRoundId: BigNumber;
    commitDeposit: BigNumber;
    keeperDeposit: BigNumber;
    trackingCode: string;
}
export type NextPriceOrderRemovedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], NextPriceOrderRemovedEventObject>;
export type NextPriceOrderRemovedEventFilter = TypedEventFilter<NextPriceOrderRemovedEvent>;
export interface NextPriceOrderSubmittedEventObject {
    account: string;
    sizeDelta: BigNumber;
    targetRoundId: BigNumber;
    commitDeposit: BigNumber;
    keeperDeposit: BigNumber;
    trackingCode: string;
}
export type NextPriceOrderSubmittedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], NextPriceOrderSubmittedEventObject>;
export type NextPriceOrderSubmittedEventFilter = TypedEventFilter<NextPriceOrderSubmittedEvent>;
export interface PositionLiquidatedEventObject {
    id: BigNumber;
    account: string;
    liquidator: string;
    size: BigNumber;
    price: BigNumber;
    fee: BigNumber;
}
export type PositionLiquidatedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], PositionLiquidatedEventObject>;
export type PositionLiquidatedEventFilter = TypedEventFilter<PositionLiquidatedEvent>;
export interface PositionModifiedEventObject {
    id: BigNumber;
    account: string;
    margin: BigNumber;
    size: BigNumber;
    tradeSize: BigNumber;
    lastPrice: BigNumber;
    fundingIndex: BigNumber;
    fee: BigNumber;
}
export type PositionModifiedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PositionModifiedEventObject>;
export type PositionModifiedEventFilter = TypedEventFilter<PositionModifiedEvent>;
export interface FuturesMarket extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FuturesMarketInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        accessibleMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            marginAccessible: BigNumber;
            invalid: boolean;
        }>;
        accruedFunding(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            funding: BigNumber;
            invalid: boolean;
        }>;
        assetPrice(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            price: BigNumber;
            invalid: boolean;
        }>;
        baseAsset(overrides?: CallOverrides): Promise<[string]>;
        canLiquidate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        cancelNextPriceOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closePosition(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closePositionWithTracking(trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        currentFundingRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        executeNextPriceOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fundingLastRecomputed(overrides?: CallOverrides): Promise<[number]>;
        fundingSequence(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        fundingSequenceLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;
        liquidatePosition(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        liquidationFee(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidationPrice(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            price: BigNumber;
            invalid: boolean;
        }>;
        marketDebt(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            debt: BigNumber;
            invalid: boolean;
        }>;
        marketKey(overrides?: CallOverrides): Promise<[string]>;
        marketSize(overrides?: CallOverrides): Promise<[BigNumber]>;
        marketSizes(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            long: BigNumber;
            short: BigNumber;
        }>;
        marketSkew(overrides?: CallOverrides): Promise<[BigNumber]>;
        modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nextPriceOrders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            sizeDelta: BigNumber;
            targetRoundId: BigNumber;
            commitDeposit: BigNumber;
            keeperDeposit: BigNumber;
            trackingCode: string;
        }>;
        notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            value: BigNumber;
            invalid: boolean;
        }>;
        orderFee(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            fee: BigNumber;
            invalid: boolean;
        }>;
        positions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            id: BigNumber;
            lastFundingIndex: BigNumber;
            margin: BigNumber;
            lastPrice: BigNumber;
            size: BigNumber;
        }>;
        postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            margin: BigNumber;
            size: BigNumber;
            price: BigNumber;
            liqPrice: BigNumber;
            fee: BigNumber;
            status: number;
        }>;
        profitLoss(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            pnl: BigNumber;
            invalid: boolean;
        }>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recomputeFunding(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        remainingMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            marginRemaining: BigNumber;
            invalid: boolean;
        }>;
        resolver(overrides?: CallOverrides): Promise<[string]>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<[string[]] & {
            addresses: string[];
        }>;
        submitNextPriceOrder(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        submitNextPriceOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferMargin(marginDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unrecordedFunding(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            funding: BigNumber;
            invalid: boolean;
        }>;
        withdrawAllMargin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    accessibleMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        boolean
    ] & {
        marginAccessible: BigNumber;
        invalid: boolean;
    }>;
    accruedFunding(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        funding: BigNumber;
        invalid: boolean;
    }>;
    assetPrice(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        price: BigNumber;
        invalid: boolean;
    }>;
    baseAsset(overrides?: CallOverrides): Promise<string>;
    canLiquidate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    cancelNextPriceOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closePosition(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closePositionWithTracking(trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    currentFundingRate(overrides?: CallOverrides): Promise<BigNumber>;
    executeNextPriceOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fundingLastRecomputed(overrides?: CallOverrides): Promise<number>;
    fundingSequence(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    fundingSequenceLength(overrides?: CallOverrides): Promise<BigNumber>;
    isResolverCached(overrides?: CallOverrides): Promise<boolean>;
    liquidatePosition(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    liquidationFee(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    liquidationPrice(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        price: BigNumber;
        invalid: boolean;
    }>;
    marketDebt(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        debt: BigNumber;
        invalid: boolean;
    }>;
    marketKey(overrides?: CallOverrides): Promise<string>;
    marketSize(overrides?: CallOverrides): Promise<BigNumber>;
    marketSizes(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        long: BigNumber;
        short: BigNumber;
    }>;
    marketSkew(overrides?: CallOverrides): Promise<BigNumber>;
    modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nextPriceOrders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        sizeDelta: BigNumber;
        targetRoundId: BigNumber;
        commitDeposit: BigNumber;
        keeperDeposit: BigNumber;
        trackingCode: string;
    }>;
    notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        value: BigNumber;
        invalid: boolean;
    }>;
    orderFee(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        fee: BigNumber;
        invalid: boolean;
    }>;
    positions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        id: BigNumber;
        lastFundingIndex: BigNumber;
        margin: BigNumber;
        lastPrice: BigNumber;
        size: BigNumber;
    }>;
    postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        margin: BigNumber;
        size: BigNumber;
        price: BigNumber;
        liqPrice: BigNumber;
        fee: BigNumber;
        status: number;
    }>;
    profitLoss(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        pnl: BigNumber;
        invalid: boolean;
    }>;
    rebuildCache(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recomputeFunding(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    remainingMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        boolean
    ] & {
        marginRemaining: BigNumber;
        invalid: boolean;
    }>;
    resolver(overrides?: CallOverrides): Promise<string>;
    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;
    submitNextPriceOrder(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    submitNextPriceOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferMargin(marginDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unrecordedFunding(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        funding: BigNumber;
        invalid: boolean;
    }>;
    withdrawAllMargin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accessibleMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            marginAccessible: BigNumber;
            invalid: boolean;
        }>;
        accruedFunding(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            funding: BigNumber;
            invalid: boolean;
        }>;
        assetPrice(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            price: BigNumber;
            invalid: boolean;
        }>;
        baseAsset(overrides?: CallOverrides): Promise<string>;
        canLiquidate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        cancelNextPriceOrder(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        closePosition(overrides?: CallOverrides): Promise<void>;
        closePositionWithTracking(trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        currentFundingRate(overrides?: CallOverrides): Promise<BigNumber>;
        executeNextPriceOrder(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        fundingLastRecomputed(overrides?: CallOverrides): Promise<number>;
        fundingSequence(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fundingSequenceLength(overrides?: CallOverrides): Promise<BigNumber>;
        isResolverCached(overrides?: CallOverrides): Promise<boolean>;
        liquidatePosition(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        liquidationFee(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationPrice(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            price: BigNumber;
            invalid: boolean;
        }>;
        marketDebt(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            debt: BigNumber;
            invalid: boolean;
        }>;
        marketKey(overrides?: CallOverrides): Promise<string>;
        marketSize(overrides?: CallOverrides): Promise<BigNumber>;
        marketSizes(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            long: BigNumber;
            short: BigNumber;
        }>;
        marketSkew(overrides?: CallOverrides): Promise<BigNumber>;
        modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        nextPriceOrders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string
        ] & {
            sizeDelta: BigNumber;
            targetRoundId: BigNumber;
            commitDeposit: BigNumber;
            keeperDeposit: BigNumber;
            trackingCode: string;
        }>;
        notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            value: BigNumber;
            invalid: boolean;
        }>;
        orderFee(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            fee: BigNumber;
            invalid: boolean;
        }>;
        positions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            id: BigNumber;
            lastFundingIndex: BigNumber;
            margin: BigNumber;
            lastPrice: BigNumber;
            size: BigNumber;
        }>;
        postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number
        ] & {
            margin: BigNumber;
            size: BigNumber;
            price: BigNumber;
            liqPrice: BigNumber;
            fee: BigNumber;
            status: number;
        }>;
        profitLoss(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            pnl: BigNumber;
            invalid: boolean;
        }>;
        rebuildCache(overrides?: CallOverrides): Promise<void>;
        recomputeFunding(overrides?: CallOverrides): Promise<BigNumber>;
        remainingMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            marginRemaining: BigNumber;
            invalid: boolean;
        }>;
        resolver(overrides?: CallOverrides): Promise<string>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;
        submitNextPriceOrder(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        submitNextPriceOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        transferMargin(marginDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unrecordedFunding(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            funding: BigNumber;
            invalid: boolean;
        }>;
        withdrawAllMargin(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CacheUpdated(bytes32,address)"(name?: null, destination?: null): CacheUpdatedEventFilter;
        CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;
        "FundingRecomputed(int256,uint256,uint256)"(funding?: null, index?: null, timestamp?: null): FundingRecomputedEventFilter;
        FundingRecomputed(funding?: null, index?: null, timestamp?: null): FundingRecomputedEventFilter;
        "FuturesTracking(bytes32,bytes32,bytes32,int256,uint256)"(trackingCode?: PromiseOrValue<BytesLike> | null, baseAsset?: null, marketKey?: null, sizeDelta?: null, fee?: null): FuturesTrackingEventFilter;
        FuturesTracking(trackingCode?: PromiseOrValue<BytesLike> | null, baseAsset?: null, marketKey?: null, sizeDelta?: null, fee?: null): FuturesTrackingEventFilter;
        "MarginTransferred(address,int256)"(account?: PromiseOrValue<string> | null, marginDelta?: null): MarginTransferredEventFilter;
        MarginTransferred(account?: PromiseOrValue<string> | null, marginDelta?: null): MarginTransferredEventFilter;
        "NextPriceOrderRemoved(address,uint256,int256,uint256,uint256,uint256,bytes32)"(account?: PromiseOrValue<string> | null, currentRoundId?: null, sizeDelta?: null, targetRoundId?: null, commitDeposit?: null, keeperDeposit?: null, trackingCode?: null): NextPriceOrderRemovedEventFilter;
        NextPriceOrderRemoved(account?: PromiseOrValue<string> | null, currentRoundId?: null, sizeDelta?: null, targetRoundId?: null, commitDeposit?: null, keeperDeposit?: null, trackingCode?: null): NextPriceOrderRemovedEventFilter;
        "NextPriceOrderSubmitted(address,int256,uint256,uint256,uint256,bytes32)"(account?: PromiseOrValue<string> | null, sizeDelta?: null, targetRoundId?: null, commitDeposit?: null, keeperDeposit?: null, trackingCode?: null): NextPriceOrderSubmittedEventFilter;
        NextPriceOrderSubmitted(account?: PromiseOrValue<string> | null, sizeDelta?: null, targetRoundId?: null, commitDeposit?: null, keeperDeposit?: null, trackingCode?: null): NextPriceOrderSubmittedEventFilter;
        "PositionLiquidated(uint256,address,address,int256,uint256,uint256)"(id?: PromiseOrValue<BigNumberish> | null, account?: PromiseOrValue<string> | null, liquidator?: PromiseOrValue<string> | null, size?: null, price?: null, fee?: null): PositionLiquidatedEventFilter;
        PositionLiquidated(id?: PromiseOrValue<BigNumberish> | null, account?: PromiseOrValue<string> | null, liquidator?: PromiseOrValue<string> | null, size?: null, price?: null, fee?: null): PositionLiquidatedEventFilter;
        "PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)"(id?: PromiseOrValue<BigNumberish> | null, account?: PromiseOrValue<string> | null, margin?: null, size?: null, tradeSize?: null, lastPrice?: null, fundingIndex?: null, fee?: null): PositionModifiedEventFilter;
        PositionModified(id?: PromiseOrValue<BigNumberish> | null, account?: PromiseOrValue<string> | null, margin?: null, size?: null, tradeSize?: null, lastPrice?: null, fundingIndex?: null, fee?: null): PositionModifiedEventFilter;
    };
    estimateGas: {
        accessibleMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        accruedFunding(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        assetPrice(overrides?: CallOverrides): Promise<BigNumber>;
        baseAsset(overrides?: CallOverrides): Promise<BigNumber>;
        canLiquidate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelNextPriceOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closePosition(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closePositionWithTracking(trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        currentFundingRate(overrides?: CallOverrides): Promise<BigNumber>;
        executeNextPriceOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundingLastRecomputed(overrides?: CallOverrides): Promise<BigNumber>;
        fundingSequence(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fundingSequenceLength(overrides?: CallOverrides): Promise<BigNumber>;
        isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;
        liquidatePosition(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidationFee(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationPrice(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        marketDebt(overrides?: CallOverrides): Promise<BigNumber>;
        marketKey(overrides?: CallOverrides): Promise<BigNumber>;
        marketSize(overrides?: CallOverrides): Promise<BigNumber>;
        marketSizes(overrides?: CallOverrides): Promise<BigNumber>;
        marketSkew(overrides?: CallOverrides): Promise<BigNumber>;
        modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nextPriceOrders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        orderFee(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        positions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        profitLoss(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recomputeFunding(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remainingMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        resolver(overrides?: CallOverrides): Promise<BigNumber>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;
        submitNextPriceOrder(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        submitNextPriceOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferMargin(marginDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unrecordedFunding(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawAllMargin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accessibleMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accruedFunding(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assetPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canLiquidate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelNextPriceOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closePosition(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closePositionWithTracking(trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        currentFundingRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeNextPriceOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundingLastRecomputed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingSequence(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingSequenceLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidatePosition(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidationFee(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationPrice(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketSizes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketSkew(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nextPriceOrders(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        orderFee(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        profitLoss(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recomputeFunding(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remainingMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        submitNextPriceOrder(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        submitNextPriceOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferMargin(marginDelta: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unrecordedFunding(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawAllMargin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
