import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface ExchangerInterface extends utils.Interface {
    functions: {
        "CONTRACT_NAME()": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "calculateAmountAfterSettlement(address,bytes32,uint256,uint256)": FunctionFragment;
        "dynamicFeeRateForExchange(bytes32,bytes32)": FunctionFragment;
        "exchange(address,address,bytes32,uint256,bytes32,address,bool,address,bytes32)": FunctionFragment;
        "exchangeAtomically(address,bytes32,uint256,bytes32,address,bytes32,uint256)": FunctionFragment;
        "feeRateForExchange(bytes32,bytes32)": FunctionFragment;
        "getAmountsForExchange(uint256,bytes32,bytes32)": FunctionFragment;
        "hasWaitingPeriodOrSettlementOwing(address,bytes32)": FunctionFragment;
        "isResolverCached()": FunctionFragment;
        "isSynthRateInvalid(bytes32)": FunctionFragment;
        "lastExchangeRate(bytes32)": FunctionFragment;
        "maxSecsLeftInWaitingPeriod(address,bytes32)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "priceDeviationThresholdFactor()": FunctionFragment;
        "rebuildCache()": FunctionFragment;
        "resolver()": FunctionFragment;
        "resolverAddressesRequired()": FunctionFragment;
        "settle(address,bytes32)": FunctionFragment;
        "settlementOwing(address,bytes32)": FunctionFragment;
        "tradingRewardsEnabled()": FunctionFragment;
        "waitingPeriodSecs()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CONTRACT_NAME" | "acceptOwnership" | "calculateAmountAfterSettlement" | "dynamicFeeRateForExchange" | "exchange" | "exchangeAtomically" | "feeRateForExchange" | "getAmountsForExchange" | "hasWaitingPeriodOrSettlementOwing" | "isResolverCached" | "isSynthRateInvalid" | "lastExchangeRate" | "maxSecsLeftInWaitingPeriod" | "nominateNewOwner" | "nominatedOwner" | "owner" | "priceDeviationThresholdFactor" | "rebuildCache" | "resolver" | "resolverAddressesRequired" | "settle" | "settlementOwing" | "tradingRewardsEnabled" | "waitingPeriodSecs"): FunctionFragment;
    encodeFunctionData(functionFragment: "CONTRACT_NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateAmountAfterSettlement", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "dynamicFeeRateForExchange", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "exchange", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "exchangeAtomically", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "feeRateForExchange", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getAmountsForExchange", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "hasWaitingPeriodOrSettlementOwing", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "isResolverCached", values?: undefined): string;
    encodeFunctionData(functionFragment: "isSynthRateInvalid", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "lastExchangeRate", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "maxSecsLeftInWaitingPeriod", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceDeviationThresholdFactor", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebuildCache", values?: undefined): string;
    encodeFunctionData(functionFragment: "resolver", values?: undefined): string;
    encodeFunctionData(functionFragment: "resolverAddressesRequired", values?: undefined): string;
    encodeFunctionData(functionFragment: "settle", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "settlementOwing", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "tradingRewardsEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "waitingPeriodSecs", values?: undefined): string;
    decodeFunctionResult(functionFragment: "CONTRACT_NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateAmountAfterSettlement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dynamicFeeRateForExchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeAtomically", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeRateForExchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsForExchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasWaitingPeriodOrSettlementOwing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isResolverCached", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSynthRateInvalid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastExchangeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxSecsLeftInWaitingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceDeviationThresholdFactor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebuildCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolverAddressesRequired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settlementOwing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tradingRewardsEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "waitingPeriodSecs", data: BytesLike): Result;
    events: {
        "CacheUpdated(bytes32,address)": EventFragment;
        "ExchangeEntryAppended(address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256)": EventFragment;
        "ExchangeEntrySettled(address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CacheUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExchangeEntryAppended"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExchangeEntrySettled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
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
export interface ExchangeEntryAppendedEventObject {
    account: string;
    src: string;
    amount: BigNumber;
    dest: string;
    amountReceived: BigNumber;
    exchangeFeeRate: BigNumber;
    roundIdForSrc: BigNumber;
    roundIdForDest: BigNumber;
}
export type ExchangeEntryAppendedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ExchangeEntryAppendedEventObject>;
export type ExchangeEntryAppendedEventFilter = TypedEventFilter<ExchangeEntryAppendedEvent>;
export interface ExchangeEntrySettledEventObject {
    from: string;
    src: string;
    amount: BigNumber;
    dest: string;
    reclaim: BigNumber;
    rebate: BigNumber;
    srcRoundIdAtPeriodEnd: BigNumber;
    destRoundIdAtPeriodEnd: BigNumber;
    exchangeTimestamp: BigNumber;
}
export type ExchangeEntrySettledEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ExchangeEntrySettledEventObject>;
export type ExchangeEntrySettledEventFilter = TypedEventFilter<ExchangeEntrySettledEvent>;
export interface OwnerChangedEventObject {
    oldOwner: string;
    newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[
    string,
    string
], OwnerChangedEventObject>;
export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;
export interface OwnerNominatedEventObject {
    newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[
    string
], OwnerNominatedEventObject>;
export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;
export interface Exchanger extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ExchangerInterface;
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
        CONTRACT_NAME(overrides?: CallOverrides): Promise<[string]>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calculateAmountAfterSettlement(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, refunded: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountAfterSettlement: BigNumber;
        }>;
        dynamicFeeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            feeRate: BigNumber;
            tooVolatile: boolean;
        }>;
        exchange(exchangeForAddress: PromiseOrValue<string>, from: PromiseOrValue<string>, sourceCurrencyKey: PromiseOrValue<BytesLike>, sourceAmount: PromiseOrValue<BigNumberish>, destinationCurrencyKey: PromiseOrValue<BytesLike>, destinationAddress: PromiseOrValue<string>, virtualSynth: PromiseOrValue<boolean>, rewardAddress: PromiseOrValue<string>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeAtomically(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BytesLike>, arg6: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        feeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAmountsForExchange(sourceAmount: PromiseOrValue<BigNumberish>, sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountReceived: BigNumber;
            fee: BigNumber;
            exchangeFeeRate: BigNumber;
        }>;
        hasWaitingPeriodOrSettlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;
        isSynthRateInvalid(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        lastExchangeRate(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxSecsLeftInWaitingPeriod(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<[BigNumber]>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resolver(overrides?: CallOverrides): Promise<[string]>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<[string[]] & {
            addresses: string[];
        }>;
        settle(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        settlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reclaimAmount: BigNumber;
            rebateAmount: BigNumber;
            numEntries: BigNumber;
        }>;
        tradingRewardsEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        waitingPeriodSecs(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calculateAmountAfterSettlement(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, refunded: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    dynamicFeeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        boolean
    ] & {
        feeRate: BigNumber;
        tooVolatile: boolean;
    }>;
    exchange(exchangeForAddress: PromiseOrValue<string>, from: PromiseOrValue<string>, sourceCurrencyKey: PromiseOrValue<BytesLike>, sourceAmount: PromiseOrValue<BigNumberish>, destinationCurrencyKey: PromiseOrValue<BytesLike>, destinationAddress: PromiseOrValue<string>, virtualSynth: PromiseOrValue<boolean>, rewardAddress: PromiseOrValue<string>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeAtomically(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BytesLike>, arg6: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    feeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getAmountsForExchange(sourceAmount: PromiseOrValue<BigNumberish>, sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountReceived: BigNumber;
        fee: BigNumber;
        exchangeFeeRate: BigNumber;
    }>;
    hasWaitingPeriodOrSettlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    isResolverCached(overrides?: CallOverrides): Promise<boolean>;
    isSynthRateInvalid(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    lastExchangeRate(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    maxSecsLeftInWaitingPeriod(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<BigNumber>;
    rebuildCache(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resolver(overrides?: CallOverrides): Promise<string>;
    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;
    settle(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    settlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        reclaimAmount: BigNumber;
        rebateAmount: BigNumber;
        numEntries: BigNumber;
    }>;
    tradingRewardsEnabled(overrides?: CallOverrides): Promise<boolean>;
    waitingPeriodSecs(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        calculateAmountAfterSettlement(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, refunded: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        dynamicFeeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            feeRate: BigNumber;
            tooVolatile: boolean;
        }>;
        exchange(exchangeForAddress: PromiseOrValue<string>, from: PromiseOrValue<string>, sourceCurrencyKey: PromiseOrValue<BytesLike>, sourceAmount: PromiseOrValue<BigNumberish>, destinationCurrencyKey: PromiseOrValue<BytesLike>, destinationAddress: PromiseOrValue<string>, virtualSynth: PromiseOrValue<boolean>, rewardAddress: PromiseOrValue<string>, trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string
        ] & {
            amountReceived: BigNumber;
            vSynth: string;
        }>;
        exchangeAtomically(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BytesLike>, arg6: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        feeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsForExchange(sourceAmount: PromiseOrValue<BigNumberish>, sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountReceived: BigNumber;
            fee: BigNumber;
            exchangeFeeRate: BigNumber;
        }>;
        hasWaitingPeriodOrSettlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        isResolverCached(overrides?: CallOverrides): Promise<boolean>;
        isSynthRateInvalid(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        lastExchangeRate(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxSecsLeftInWaitingPeriod(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<BigNumber>;
        rebuildCache(overrides?: CallOverrides): Promise<void>;
        resolver(overrides?: CallOverrides): Promise<string>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;
        settle(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reclaimed: BigNumber;
            refunded: BigNumber;
            numEntriesSettled: BigNumber;
        }>;
        settlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            reclaimAmount: BigNumber;
            rebateAmount: BigNumber;
            numEntries: BigNumber;
        }>;
        tradingRewardsEnabled(overrides?: CallOverrides): Promise<boolean>;
        waitingPeriodSecs(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "CacheUpdated(bytes32,address)"(name?: null, destination?: null): CacheUpdatedEventFilter;
        CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;
        "ExchangeEntryAppended(address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256)"(account?: PromiseOrValue<string> | null, src?: null, amount?: null, dest?: null, amountReceived?: null, exchangeFeeRate?: null, roundIdForSrc?: null, roundIdForDest?: null): ExchangeEntryAppendedEventFilter;
        ExchangeEntryAppended(account?: PromiseOrValue<string> | null, src?: null, amount?: null, dest?: null, amountReceived?: null, exchangeFeeRate?: null, roundIdForSrc?: null, roundIdForDest?: null): ExchangeEntryAppendedEventFilter;
        "ExchangeEntrySettled(address,bytes32,uint256,bytes32,uint256,uint256,uint256,uint256,uint256)"(from?: PromiseOrValue<string> | null, src?: null, amount?: null, dest?: null, reclaim?: null, rebate?: null, srcRoundIdAtPeriodEnd?: null, destRoundIdAtPeriodEnd?: null, exchangeTimestamp?: null): ExchangeEntrySettledEventFilter;
        ExchangeEntrySettled(from?: PromiseOrValue<string> | null, src?: null, amount?: null, dest?: null, reclaim?: null, rebate?: null, srcRoundIdAtPeriodEnd?: null, destRoundIdAtPeriodEnd?: null, exchangeTimestamp?: null): ExchangeEntrySettledEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
    };
    estimateGas: {
        CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calculateAmountAfterSettlement(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, refunded: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        dynamicFeeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        exchange(exchangeForAddress: PromiseOrValue<string>, from: PromiseOrValue<string>, sourceCurrencyKey: PromiseOrValue<BytesLike>, sourceAmount: PromiseOrValue<BigNumberish>, destinationCurrencyKey: PromiseOrValue<BytesLike>, destinationAddress: PromiseOrValue<string>, virtualSynth: PromiseOrValue<boolean>, rewardAddress: PromiseOrValue<string>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeAtomically(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BytesLike>, arg6: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        feeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsForExchange(sourceAmount: PromiseOrValue<BigNumberish>, sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        hasWaitingPeriodOrSettlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;
        isSynthRateInvalid(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        lastExchangeRate(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxSecsLeftInWaitingPeriod(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<BigNumber>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resolver(overrides?: CallOverrides): Promise<BigNumber>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;
        settle(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        settlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        tradingRewardsEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        waitingPeriodSecs(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calculateAmountAfterSettlement(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, amount: PromiseOrValue<BigNumberish>, refunded: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dynamicFeeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchange(exchangeForAddress: PromiseOrValue<string>, from: PromiseOrValue<string>, sourceCurrencyKey: PromiseOrValue<BytesLike>, sourceAmount: PromiseOrValue<BigNumberish>, destinationCurrencyKey: PromiseOrValue<BytesLike>, destinationAddress: PromiseOrValue<string>, virtualSynth: PromiseOrValue<boolean>, rewardAddress: PromiseOrValue<string>, trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeAtomically(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BytesLike>, arg2: PromiseOrValue<BigNumberish>, arg3: PromiseOrValue<BytesLike>, arg4: PromiseOrValue<string>, arg5: PromiseOrValue<BytesLike>, arg6: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        feeRateForExchange(sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsForExchange(sourceAmount: PromiseOrValue<BigNumberish>, sourceCurrencyKey: PromiseOrValue<BytesLike>, destinationCurrencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasWaitingPeriodOrSettlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSynthRateInvalid(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastExchangeRate(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxSecsLeftInWaitingPeriod(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        settle(from: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        settlementOwing(account: PromiseOrValue<string>, currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tradingRewardsEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        waitingPeriodSecs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
