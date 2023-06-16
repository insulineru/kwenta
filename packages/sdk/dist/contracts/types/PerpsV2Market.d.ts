import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IPerpsV2MarketConsolidated {
    type DelayedOrderStruct = {
        isOffchain: PromiseOrValue<boolean>;
        sizeDelta: PromiseOrValue<BigNumberish>;
        desiredFillPrice: PromiseOrValue<BigNumberish>;
        targetRoundId: PromiseOrValue<BigNumberish>;
        commitDeposit: PromiseOrValue<BigNumberish>;
        keeperDeposit: PromiseOrValue<BigNumberish>;
        executableAtTime: PromiseOrValue<BigNumberish>;
        intentionTime: PromiseOrValue<BigNumberish>;
        trackingCode: PromiseOrValue<BytesLike>;
    };
    type DelayedOrderStructOutput = [
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        isOffchain: boolean;
        sizeDelta: BigNumber;
        desiredFillPrice: BigNumber;
        targetRoundId: BigNumber;
        commitDeposit: BigNumber;
        keeperDeposit: BigNumber;
        executableAtTime: BigNumber;
        intentionTime: BigNumber;
        trackingCode: string;
    };
    type PositionStruct = {
        id: PromiseOrValue<BigNumberish>;
        lastFundingIndex: PromiseOrValue<BigNumberish>;
        margin: PromiseOrValue<BigNumberish>;
        lastPrice: PromiseOrValue<BigNumberish>;
        size: PromiseOrValue<BigNumberish>;
    };
    type PositionStructOutput = [
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
    };
}
export interface PerpsV2MarketInterface extends utils.Interface {
    functions: {
        "accessibleMargin(address)": FunctionFragment;
        "accruedFunding(address)": FunctionFragment;
        "assetPrice()": FunctionFragment;
        "baseAsset()": FunctionFragment;
        "canLiquidate(address)": FunctionFragment;
        "cancelDelayedOrder(address)": FunctionFragment;
        "cancelOffchainDelayedOrder(address)": FunctionFragment;
        "closePosition(uint256)": FunctionFragment;
        "closePositionWithTracking(uint256,bytes32)": FunctionFragment;
        "currentFundingRate()": FunctionFragment;
        "currentFundingVelocity()": FunctionFragment;
        "delayedOrders(address)": FunctionFragment;
        "executeDelayedOrder(address)": FunctionFragment;
        "executeOffchainDelayedOrder(address,bytes[])": FunctionFragment;
        "fillPrice(int256)": FunctionFragment;
        "flagPosition(address)": FunctionFragment;
        "forceLiquidatePosition(address)": FunctionFragment;
        "fundingLastRecomputed()": FunctionFragment;
        "fundingRateLastRecomputed()": FunctionFragment;
        "fundingSequence(uint256)": FunctionFragment;
        "fundingSequenceLength()": FunctionFragment;
        "isFlagged(address)": FunctionFragment;
        "liquidatePosition(address)": FunctionFragment;
        "liquidationFee(address)": FunctionFragment;
        "liquidationPrice(address)": FunctionFragment;
        "marketDebt()": FunctionFragment;
        "marketKey()": FunctionFragment;
        "marketSize()": FunctionFragment;
        "marketSizes()": FunctionFragment;
        "marketSkew()": FunctionFragment;
        "modifyPosition(int256,uint256)": FunctionFragment;
        "modifyPositionWithTracking(int256,uint256,bytes32)": FunctionFragment;
        "notionalValue(address)": FunctionFragment;
        "orderFee(int256,uint8)": FunctionFragment;
        "positions(address)": FunctionFragment;
        "postTradeDetails(int256,uint256,uint8,address)": FunctionFragment;
        "profitLoss(address)": FunctionFragment;
        "recomputeFunding()": FunctionFragment;
        "remainingMargin(address)": FunctionFragment;
        "submitCloseDelayedOrderWithTracking(uint256,uint256,bytes32)": FunctionFragment;
        "submitCloseOffchainDelayedOrderWithTracking(uint256,bytes32)": FunctionFragment;
        "submitDelayedOrder(int256,uint256,uint256)": FunctionFragment;
        "submitDelayedOrderWithTracking(int256,uint256,uint256,bytes32)": FunctionFragment;
        "submitOffchainDelayedOrder(int256,uint256)": FunctionFragment;
        "submitOffchainDelayedOrderWithTracking(int256,uint256,bytes32)": FunctionFragment;
        "transferMargin(int256)": FunctionFragment;
        "unrecordedFunding()": FunctionFragment;
        "withdrawAllMargin()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessibleMargin" | "accruedFunding" | "assetPrice" | "baseAsset" | "canLiquidate" | "cancelDelayedOrder" | "cancelOffchainDelayedOrder" | "closePosition" | "closePositionWithTracking" | "currentFundingRate" | "currentFundingVelocity" | "delayedOrders" | "executeDelayedOrder" | "executeOffchainDelayedOrder" | "fillPrice" | "flagPosition" | "forceLiquidatePosition" | "fundingLastRecomputed" | "fundingRateLastRecomputed" | "fundingSequence" | "fundingSequenceLength" | "isFlagged" | "liquidatePosition" | "liquidationFee" | "liquidationPrice" | "marketDebt" | "marketKey" | "marketSize" | "marketSizes" | "marketSkew" | "modifyPosition" | "modifyPositionWithTracking" | "notionalValue" | "orderFee" | "positions" | "postTradeDetails" | "profitLoss" | "recomputeFunding" | "remainingMargin" | "submitCloseDelayedOrderWithTracking" | "submitCloseOffchainDelayedOrderWithTracking" | "submitDelayedOrder" | "submitDelayedOrderWithTracking" | "submitOffchainDelayedOrder" | "submitOffchainDelayedOrderWithTracking" | "transferMargin" | "unrecordedFunding" | "withdrawAllMargin"): FunctionFragment;
    encodeFunctionData(functionFragment: "accessibleMargin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "accruedFunding", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "assetPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "canLiquidate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cancelDelayedOrder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cancelOffchainDelayedOrder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "closePosition", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "closePositionWithTracking", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "currentFundingRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentFundingVelocity", values?: undefined): string;
    encodeFunctionData(functionFragment: "delayedOrders", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "executeDelayedOrder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "executeOffchainDelayedOrder", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "fillPrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "flagPosition", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "forceLiquidatePosition", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fundingLastRecomputed", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundingRateLastRecomputed", values?: undefined): string;
    encodeFunctionData(functionFragment: "fundingSequence", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "fundingSequenceLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "isFlagged", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "liquidatePosition", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "liquidationFee", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "liquidationPrice", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "marketDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketKey", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketSize", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketSizes", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketSkew", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyPosition", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "modifyPositionWithTracking", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "notionalValue", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "orderFee", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "positions", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "postTradeDetails", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "profitLoss", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "recomputeFunding", values?: undefined): string;
    encodeFunctionData(functionFragment: "remainingMargin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "submitCloseDelayedOrderWithTracking", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "submitCloseOffchainDelayedOrderWithTracking", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "submitDelayedOrder", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "submitDelayedOrderWithTracking", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "submitOffchainDelayedOrder", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "submitOffchainDelayedOrderWithTracking", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "transferMargin", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unrecordedFunding", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawAllMargin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accessibleMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accruedFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canLiquidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelDelayedOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOffchainDelayedOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePositionWithTracking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentFundingRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentFundingVelocity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delayedOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeDelayedOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOffchainDelayedOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flagPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceLiquidatePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingLastRecomputed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingRateLastRecomputed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingSequence", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundingSequenceLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFlagged", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "notionalValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "orderFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postTradeDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "profitLoss", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recomputeFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remainingMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitCloseDelayedOrderWithTracking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitCloseOffchainDelayedOrderWithTracking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitDelayedOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitDelayedOrderWithTracking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitOffchainDelayedOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitOffchainDelayedOrderWithTracking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unrecordedFunding", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllMargin", data: BytesLike): Result;
    events: {
        "DelayedOrderRemoved(address,bool,uint256,int256,uint256,uint256,uint256,bytes32)": EventFragment;
        "DelayedOrderSubmitted(address,bool,int256,uint256,uint256,uint256,uint256,uint256,bytes32)": EventFragment;
        "FundingRecomputed(int256,int256,uint256,uint256)": EventFragment;
        "MarginTransferred(address,int256)": EventFragment;
        "PerpsTracking(bytes32,bytes32,bytes32,int256,uint256)": EventFragment;
        "PositionFlagged(uint256,address,address,uint256)": EventFragment;
        "PositionLiquidated(uint256,address,address,int256,uint256,uint256,uint256,uint256)": EventFragment;
        "PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256,int256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DelayedOrderRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelayedOrderSubmitted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundingRecomputed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarginTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PerpsTracking"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionFlagged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionLiquidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionModified"): EventFragment;
}
export interface DelayedOrderRemovedEventObject {
    account: string;
    isOffchain: boolean;
    currentRoundId: BigNumber;
    sizeDelta: BigNumber;
    targetRoundId: BigNumber;
    commitDeposit: BigNumber;
    keeperDeposit: BigNumber;
    trackingCode: string;
}
export type DelayedOrderRemovedEvent = TypedEvent<[
    string,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], DelayedOrderRemovedEventObject>;
export type DelayedOrderRemovedEventFilter = TypedEventFilter<DelayedOrderRemovedEvent>;
export interface DelayedOrderSubmittedEventObject {
    account: string;
    isOffchain: boolean;
    sizeDelta: BigNumber;
    targetRoundId: BigNumber;
    intentionTime: BigNumber;
    executableAtTime: BigNumber;
    commitDeposit: BigNumber;
    keeperDeposit: BigNumber;
    trackingCode: string;
}
export type DelayedOrderSubmittedEvent = TypedEvent<[
    string,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], DelayedOrderSubmittedEventObject>;
export type DelayedOrderSubmittedEventFilter = TypedEventFilter<DelayedOrderSubmittedEvent>;
export interface FundingRecomputedEventObject {
    funding: BigNumber;
    fundingRate: BigNumber;
    index: BigNumber;
    timestamp: BigNumber;
}
export type FundingRecomputedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], FundingRecomputedEventObject>;
export type FundingRecomputedEventFilter = TypedEventFilter<FundingRecomputedEvent>;
export interface MarginTransferredEventObject {
    account: string;
    marginDelta: BigNumber;
}
export type MarginTransferredEvent = TypedEvent<[
    string,
    BigNumber
], MarginTransferredEventObject>;
export type MarginTransferredEventFilter = TypedEventFilter<MarginTransferredEvent>;
export interface PerpsTrackingEventObject {
    trackingCode: string;
    baseAsset: string;
    marketKey: string;
    sizeDelta: BigNumber;
    fee: BigNumber;
}
export type PerpsTrackingEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], PerpsTrackingEventObject>;
export type PerpsTrackingEventFilter = TypedEventFilter<PerpsTrackingEvent>;
export interface PositionFlaggedEventObject {
    id: BigNumber;
    account: string;
    flagger: string;
    timestamp: BigNumber;
}
export type PositionFlaggedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], PositionFlaggedEventObject>;
export type PositionFlaggedEventFilter = TypedEventFilter<PositionFlaggedEvent>;
export interface PositionLiquidatedEventObject {
    id: BigNumber;
    account: string;
    liquidator: string;
    size: BigNumber;
    price: BigNumber;
    flaggerFee: BigNumber;
    liquidatorFee: BigNumber;
    stakersFee: BigNumber;
}
export type PositionLiquidatedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
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
    skew: BigNumber;
}
export type PositionModifiedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], PositionModifiedEventObject>;
export type PositionModifiedEventFilter = TypedEventFilter<PositionModifiedEvent>;
export interface PerpsV2Market extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PerpsV2MarketInterface;
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
        baseAsset(overrides?: CallOverrides): Promise<[string] & {
            key: string;
        }>;
        canLiquidate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        cancelDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelOffchainDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closePosition(desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closePositionWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        currentFundingRate(overrides?: CallOverrides): Promise<[BigNumber] & {
            fundingRate: BigNumber;
        }>;
        currentFundingVelocity(overrides?: CallOverrides): Promise<[BigNumber] & {
            fundingVelocity: BigNumber;
        }>;
        delayedOrders(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IPerpsV2MarketConsolidated.DelayedOrderStructOutput]>;
        executeDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeOffchainDelayedOrder(account: PromiseOrValue<string>, priceUpdateData: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fillPrice(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            price: BigNumber;
            invalid: boolean;
        }>;
        flagPosition(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        forceLiquidatePosition(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fundingLastRecomputed(overrides?: CallOverrides): Promise<[number] & {
            timestamp: number;
        }>;
        fundingRateLastRecomputed(overrides?: CallOverrides): Promise<[BigNumber] & {
            fundingRate: BigNumber;
        }>;
        fundingSequence(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            netFunding: BigNumber;
        }>;
        fundingSequenceLength(overrides?: CallOverrides): Promise<[BigNumber] & {
            length: BigNumber;
        }>;
        isFlagged(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
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
            isInvalid: boolean;
        }>;
        marketKey(overrides?: CallOverrides): Promise<[string] & {
            key: string;
        }>;
        marketSize(overrides?: CallOverrides): Promise<[BigNumber] & {
            size: BigNumber;
        }>;
        marketSizes(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            long: BigNumber;
            short: BigNumber;
        }>;
        marketSkew(overrides?: CallOverrides): Promise<[BigNumber] & {
            skew: BigNumber;
        }>;
        modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            value: BigNumber;
            invalid: boolean;
        }>;
        orderFee(sizeDelta: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            fee: BigNumber;
            invalid: boolean;
        }>;
        positions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IPerpsV2MarketConsolidated.PositionStructOutput]>;
        postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, tradePrice: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
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
        submitCloseDelayedOrderWithTracking(desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        submitCloseOffchainDelayedOrderWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        submitDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        submitDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        submitOffchainDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        submitOffchainDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
    cancelDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOffchainDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closePosition(desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closePositionWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    currentFundingRate(overrides?: CallOverrides): Promise<BigNumber>;
    currentFundingVelocity(overrides?: CallOverrides): Promise<BigNumber>;
    delayedOrders(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IPerpsV2MarketConsolidated.DelayedOrderStructOutput>;
    executeDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeOffchainDelayedOrder(account: PromiseOrValue<string>, priceUpdateData: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fillPrice(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        price: BigNumber;
        invalid: boolean;
    }>;
    flagPosition(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    forceLiquidatePosition(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fundingLastRecomputed(overrides?: CallOverrides): Promise<number>;
    fundingRateLastRecomputed(overrides?: CallOverrides): Promise<BigNumber>;
    fundingSequence(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    fundingSequenceLength(overrides?: CallOverrides): Promise<BigNumber>;
    isFlagged(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
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
        isInvalid: boolean;
    }>;
    marketKey(overrides?: CallOverrides): Promise<string>;
    marketSize(overrides?: CallOverrides): Promise<BigNumber>;
    marketSizes(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        long: BigNumber;
        short: BigNumber;
    }>;
    marketSkew(overrides?: CallOverrides): Promise<BigNumber>;
    modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        value: BigNumber;
        invalid: boolean;
    }>;
    orderFee(sizeDelta: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        fee: BigNumber;
        invalid: boolean;
    }>;
    positions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IPerpsV2MarketConsolidated.PositionStructOutput>;
    postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, tradePrice: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
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
    submitCloseDelayedOrderWithTracking(desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    submitCloseOffchainDelayedOrderWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    submitDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    submitDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    submitOffchainDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    submitOffchainDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        cancelDelayedOrder(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        cancelOffchainDelayedOrder(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        closePosition(desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        closePositionWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        currentFundingRate(overrides?: CallOverrides): Promise<BigNumber>;
        currentFundingVelocity(overrides?: CallOverrides): Promise<BigNumber>;
        delayedOrders(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IPerpsV2MarketConsolidated.DelayedOrderStructOutput>;
        executeDelayedOrder(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        executeOffchainDelayedOrder(account: PromiseOrValue<string>, priceUpdateData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        fillPrice(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            price: BigNumber;
            invalid: boolean;
        }>;
        flagPosition(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        forceLiquidatePosition(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        fundingLastRecomputed(overrides?: CallOverrides): Promise<number>;
        fundingRateLastRecomputed(overrides?: CallOverrides): Promise<BigNumber>;
        fundingSequence(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fundingSequenceLength(overrides?: CallOverrides): Promise<BigNumber>;
        isFlagged(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        liquidatePosition(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        liquidationFee(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationPrice(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            price: BigNumber;
            invalid: boolean;
        }>;
        marketDebt(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            debt: BigNumber;
            isInvalid: boolean;
        }>;
        marketKey(overrides?: CallOverrides): Promise<string>;
        marketSize(overrides?: CallOverrides): Promise<BigNumber>;
        marketSizes(overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            long: BigNumber;
            short: BigNumber;
        }>;
        marketSkew(overrides?: CallOverrides): Promise<BigNumber>;
        modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            value: BigNumber;
            invalid: boolean;
        }>;
        orderFee(sizeDelta: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            fee: BigNumber;
            invalid: boolean;
        }>;
        positions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IPerpsV2MarketConsolidated.PositionStructOutput>;
        postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, tradePrice: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
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
        recomputeFunding(overrides?: CallOverrides): Promise<BigNumber>;
        remainingMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            marginRemaining: BigNumber;
            invalid: boolean;
        }>;
        submitCloseDelayedOrderWithTracking(desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        submitCloseOffchainDelayedOrderWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        submitDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        submitDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        submitOffchainDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        submitOffchainDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        transferMargin(marginDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unrecordedFunding(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
            funding: BigNumber;
            invalid: boolean;
        }>;
        withdrawAllMargin(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DelayedOrderRemoved(address,bool,uint256,int256,uint256,uint256,uint256,bytes32)"(account?: PromiseOrValue<string> | null, isOffchain?: null, currentRoundId?: null, sizeDelta?: null, targetRoundId?: null, commitDeposit?: null, keeperDeposit?: null, trackingCode?: null): DelayedOrderRemovedEventFilter;
        DelayedOrderRemoved(account?: PromiseOrValue<string> | null, isOffchain?: null, currentRoundId?: null, sizeDelta?: null, targetRoundId?: null, commitDeposit?: null, keeperDeposit?: null, trackingCode?: null): DelayedOrderRemovedEventFilter;
        "DelayedOrderSubmitted(address,bool,int256,uint256,uint256,uint256,uint256,uint256,bytes32)"(account?: PromiseOrValue<string> | null, isOffchain?: null, sizeDelta?: null, targetRoundId?: null, intentionTime?: null, executableAtTime?: null, commitDeposit?: null, keeperDeposit?: null, trackingCode?: null): DelayedOrderSubmittedEventFilter;
        DelayedOrderSubmitted(account?: PromiseOrValue<string> | null, isOffchain?: null, sizeDelta?: null, targetRoundId?: null, intentionTime?: null, executableAtTime?: null, commitDeposit?: null, keeperDeposit?: null, trackingCode?: null): DelayedOrderSubmittedEventFilter;
        "FundingRecomputed(int256,int256,uint256,uint256)"(funding?: null, fundingRate?: null, index?: null, timestamp?: null): FundingRecomputedEventFilter;
        FundingRecomputed(funding?: null, fundingRate?: null, index?: null, timestamp?: null): FundingRecomputedEventFilter;
        "MarginTransferred(address,int256)"(account?: PromiseOrValue<string> | null, marginDelta?: null): MarginTransferredEventFilter;
        MarginTransferred(account?: PromiseOrValue<string> | null, marginDelta?: null): MarginTransferredEventFilter;
        "PerpsTracking(bytes32,bytes32,bytes32,int256,uint256)"(trackingCode?: PromiseOrValue<BytesLike> | null, baseAsset?: null, marketKey?: null, sizeDelta?: null, fee?: null): PerpsTrackingEventFilter;
        PerpsTracking(trackingCode?: PromiseOrValue<BytesLike> | null, baseAsset?: null, marketKey?: null, sizeDelta?: null, fee?: null): PerpsTrackingEventFilter;
        "PositionFlagged(uint256,address,address,uint256)"(id?: null, account?: null, flagger?: null, timestamp?: null): PositionFlaggedEventFilter;
        PositionFlagged(id?: null, account?: null, flagger?: null, timestamp?: null): PositionFlaggedEventFilter;
        "PositionLiquidated(uint256,address,address,int256,uint256,uint256,uint256,uint256)"(id?: null, account?: null, liquidator?: null, size?: null, price?: null, flaggerFee?: null, liquidatorFee?: null, stakersFee?: null): PositionLiquidatedEventFilter;
        PositionLiquidated(id?: null, account?: null, liquidator?: null, size?: null, price?: null, flaggerFee?: null, liquidatorFee?: null, stakersFee?: null): PositionLiquidatedEventFilter;
        "PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256,int256)"(id?: PromiseOrValue<BigNumberish> | null, account?: PromiseOrValue<string> | null, margin?: null, size?: null, tradeSize?: null, lastPrice?: null, fundingIndex?: null, fee?: null, skew?: null): PositionModifiedEventFilter;
        PositionModified(id?: PromiseOrValue<BigNumberish> | null, account?: PromiseOrValue<string> | null, margin?: null, size?: null, tradeSize?: null, lastPrice?: null, fundingIndex?: null, fee?: null, skew?: null): PositionModifiedEventFilter;
    };
    estimateGas: {
        accessibleMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        accruedFunding(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        assetPrice(overrides?: CallOverrides): Promise<BigNumber>;
        baseAsset(overrides?: CallOverrides): Promise<BigNumber>;
        canLiquidate(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOffchainDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closePosition(desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closePositionWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        currentFundingRate(overrides?: CallOverrides): Promise<BigNumber>;
        currentFundingVelocity(overrides?: CallOverrides): Promise<BigNumber>;
        delayedOrders(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        executeDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeOffchainDelayedOrder(account: PromiseOrValue<string>, priceUpdateData: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fillPrice(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        flagPosition(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        forceLiquidatePosition(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundingLastRecomputed(overrides?: CallOverrides): Promise<BigNumber>;
        fundingRateLastRecomputed(overrides?: CallOverrides): Promise<BigNumber>;
        fundingSequence(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        fundingSequenceLength(overrides?: CallOverrides): Promise<BigNumber>;
        isFlagged(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
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
        modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        orderFee(sizeDelta: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        positions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, tradePrice: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        profitLoss(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        recomputeFunding(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        remainingMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        submitCloseDelayedOrderWithTracking(desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        submitCloseOffchainDelayedOrderWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        submitDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        submitDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        submitOffchainDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        submitOffchainDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        cancelDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOffchainDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closePosition(desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closePositionWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        currentFundingRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentFundingVelocity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delayedOrders(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeDelayedOrder(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeOffchainDelayedOrder(account: PromiseOrValue<string>, priceUpdateData: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fillPrice(sizeDelta: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flagPosition(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        forceLiquidatePosition(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundingLastRecomputed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingRateLastRecomputed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingSequence(index: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fundingSequenceLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFlagged(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        modifyPosition(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        modifyPositionWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        notionalValue(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        orderFee(sizeDelta: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        postTradeDetails(sizeDelta: PromiseOrValue<BigNumberish>, tradePrice: PromiseOrValue<BigNumberish>, orderType: PromiseOrValue<BigNumberish>, sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        profitLoss(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recomputeFunding(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        remainingMargin(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        submitCloseDelayedOrderWithTracking(desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        submitCloseOffchainDelayedOrderWithTracking(desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        submitDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        submitDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredTimeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        submitOffchainDelayedOrder(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        submitOffchainDelayedOrderWithTracking(sizeDelta: PromiseOrValue<BigNumberish>, desiredFillPrice: PromiseOrValue<BigNumberish>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
