import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface FuturesMarketSettingsInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "isResolverCached()": FunctionFragment;
        "liquidationBufferRatio()": FunctionFragment;
        "liquidationFeeRatio()": FunctionFragment;
        "makerFee(bytes32)": FunctionFragment;
        "makerFeeNextPrice(bytes32)": FunctionFragment;
        "maxFundingRate(bytes32)": FunctionFragment;
        "maxLeverage(bytes32)": FunctionFragment;
        "maxMarketValueUSD(bytes32)": FunctionFragment;
        "minInitialMargin()": FunctionFragment;
        "minKeeperFee()": FunctionFragment;
        "nextPriceConfirmWindow(bytes32)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "parameters(bytes32)": FunctionFragment;
        "rebuildCache()": FunctionFragment;
        "resolver()": FunctionFragment;
        "resolverAddressesRequired()": FunctionFragment;
        "setLiquidationBufferRatio(uint256)": FunctionFragment;
        "setLiquidationFeeRatio(uint256)": FunctionFragment;
        "setMakerFee(bytes32,uint256)": FunctionFragment;
        "setMakerFeeNextPrice(bytes32,uint256)": FunctionFragment;
        "setMaxFundingRate(bytes32,uint256)": FunctionFragment;
        "setMaxLeverage(bytes32,uint256)": FunctionFragment;
        "setMaxMarketValueUSD(bytes32,uint256)": FunctionFragment;
        "setMinInitialMargin(uint256)": FunctionFragment;
        "setMinKeeperFee(uint256)": FunctionFragment;
        "setNextPriceConfirmWindow(bytes32,uint256)": FunctionFragment;
        "setParameters(bytes32,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
        "setSkewScaleUSD(bytes32,uint256)": FunctionFragment;
        "setTakerFee(bytes32,uint256)": FunctionFragment;
        "setTakerFeeNextPrice(bytes32,uint256)": FunctionFragment;
        "skewScaleUSD(bytes32)": FunctionFragment;
        "takerFee(bytes32)": FunctionFragment;
        "takerFeeNextPrice(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "isResolverCached" | "liquidationBufferRatio" | "liquidationFeeRatio" | "makerFee" | "makerFeeNextPrice" | "maxFundingRate" | "maxLeverage" | "maxMarketValueUSD" | "minInitialMargin" | "minKeeperFee" | "nextPriceConfirmWindow" | "nominateNewOwner" | "nominatedOwner" | "owner" | "parameters" | "rebuildCache" | "resolver" | "resolverAddressesRequired" | "setLiquidationBufferRatio" | "setLiquidationFeeRatio" | "setMakerFee" | "setMakerFeeNextPrice" | "setMaxFundingRate" | "setMaxLeverage" | "setMaxMarketValueUSD" | "setMinInitialMargin" | "setMinKeeperFee" | "setNextPriceConfirmWindow" | "setParameters" | "setSkewScaleUSD" | "setTakerFee" | "setTakerFeeNextPrice" | "skewScaleUSD" | "takerFee" | "takerFeeNextPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "isResolverCached", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidationBufferRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "liquidationFeeRatio", values?: undefined): string;
    encodeFunctionData(functionFragment: "makerFee", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "makerFeeNextPrice", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "maxFundingRate", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "maxLeverage", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "maxMarketValueUSD", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "minInitialMargin", values?: undefined): string;
    encodeFunctionData(functionFragment: "minKeeperFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextPriceConfirmWindow", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "parameters", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "rebuildCache", values?: undefined): string;
    encodeFunctionData(functionFragment: "resolver", values?: undefined): string;
    encodeFunctionData(functionFragment: "resolverAddressesRequired", values?: undefined): string;
    encodeFunctionData(functionFragment: "setLiquidationBufferRatio", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setLiquidationFeeRatio", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMakerFee", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMakerFeeNextPrice", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxFundingRate", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxLeverage", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMaxMarketValueUSD", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinInitialMargin", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMinKeeperFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setNextPriceConfirmWindow", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setParameters", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setSkewScaleUSD", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTakerFee", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTakerFeeNextPrice", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "skewScaleUSD", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "takerFee", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "takerFeeNextPrice", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isResolverCached", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationBufferRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationFeeRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makerFeeNextPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxFundingRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxMarketValueUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minInitialMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minKeeperFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextPriceConfirmWindow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebuildCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolverAddressesRequired", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationBufferRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationFeeRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMakerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMakerFeeNextPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxFundingRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxMarketValueUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinInitialMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinKeeperFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNextPriceConfirmWindow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSkewScaleUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTakerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTakerFeeNextPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skewScaleUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takerFeeNextPrice", data: BytesLike): Result;
    events: {
        "CacheUpdated(bytes32,address)": EventFragment;
        "LiquidationBufferRatioUpdated(uint256)": EventFragment;
        "LiquidationFeeRatioUpdated(uint256)": EventFragment;
        "MinInitialMarginUpdated(uint256)": EventFragment;
        "MinKeeperFeeUpdated(uint256)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "ParameterUpdated(bytes32,bytes32,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CacheUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationBufferRatioUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationFeeRatioUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinInitialMarginUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinKeeperFeeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ParameterUpdated"): EventFragment;
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
export interface LiquidationBufferRatioUpdatedEventObject {
    bps: BigNumber;
}
export type LiquidationBufferRatioUpdatedEvent = TypedEvent<[
    BigNumber
], LiquidationBufferRatioUpdatedEventObject>;
export type LiquidationBufferRatioUpdatedEventFilter = TypedEventFilter<LiquidationBufferRatioUpdatedEvent>;
export interface LiquidationFeeRatioUpdatedEventObject {
    bps: BigNumber;
}
export type LiquidationFeeRatioUpdatedEvent = TypedEvent<[
    BigNumber
], LiquidationFeeRatioUpdatedEventObject>;
export type LiquidationFeeRatioUpdatedEventFilter = TypedEventFilter<LiquidationFeeRatioUpdatedEvent>;
export interface MinInitialMarginUpdatedEventObject {
    minMargin: BigNumber;
}
export type MinInitialMarginUpdatedEvent = TypedEvent<[
    BigNumber
], MinInitialMarginUpdatedEventObject>;
export type MinInitialMarginUpdatedEventFilter = TypedEventFilter<MinInitialMarginUpdatedEvent>;
export interface MinKeeperFeeUpdatedEventObject {
    sUSD: BigNumber;
}
export type MinKeeperFeeUpdatedEvent = TypedEvent<[
    BigNumber
], MinKeeperFeeUpdatedEventObject>;
export type MinKeeperFeeUpdatedEventFilter = TypedEventFilter<MinKeeperFeeUpdatedEvent>;
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
export interface ParameterUpdatedEventObject {
    marketKey: string;
    parameter: string;
    value: BigNumber;
}
export type ParameterUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ParameterUpdatedEventObject>;
export type ParameterUpdatedEventFilter = TypedEventFilter<ParameterUpdatedEvent>;
export interface FuturesMarketSettings extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FuturesMarketSettingsInterface;
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
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;
        liquidationBufferRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        liquidationFeeRatio(overrides?: CallOverrides): Promise<[BigNumber]>;
        makerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        makerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxFundingRate(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxLeverage(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        maxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        minInitialMargin(overrides?: CallOverrides): Promise<[BigNumber]>;
        minKeeperFee(overrides?: CallOverrides): Promise<[BigNumber]>;
        nextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        parameters(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            takerFee: BigNumber;
            makerFee: BigNumber;
            takerFeeNextPrice: BigNumber;
            makerFeeNextPrice: BigNumber;
            nextPriceConfirmWindow: BigNumber;
            maxLeverage: BigNumber;
            maxMarketValueUSD: BigNumber;
            maxFundingRate: BigNumber;
            skewScaleUSD: BigNumber;
        }>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resolver(overrides?: CallOverrides): Promise<[string]>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<[string[]] & {
            addresses: string[];
        }>;
        setLiquidationBufferRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setLiquidationFeeRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMakerFee(_marketKey: PromiseOrValue<BytesLike>, _makerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxFundingRate(_marketKey: PromiseOrValue<BytesLike>, _maxFundingRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxLeverage(_marketKey: PromiseOrValue<BytesLike>, _maxLeverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinInitialMargin(_minMargin: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinKeeperFee(_sUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setNextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setParameters(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, _makerFee: PromiseOrValue<BigNumberish>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, _maxLeverage: PromiseOrValue<BigNumberish>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, _maxFundingRate: PromiseOrValue<BigNumberish>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSkewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTakerFee(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        skewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        takerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        takerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isResolverCached(overrides?: CallOverrides): Promise<boolean>;
    liquidationBufferRatio(overrides?: CallOverrides): Promise<BigNumber>;
    liquidationFeeRatio(overrides?: CallOverrides): Promise<BigNumber>;
    makerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    makerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    maxFundingRate(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    maxLeverage(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    maxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    minInitialMargin(overrides?: CallOverrides): Promise<BigNumber>;
    minKeeperFee(overrides?: CallOverrides): Promise<BigNumber>;
    nextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    parameters(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        takerFee: BigNumber;
        makerFee: BigNumber;
        takerFeeNextPrice: BigNumber;
        makerFeeNextPrice: BigNumber;
        nextPriceConfirmWindow: BigNumber;
        maxLeverage: BigNumber;
        maxMarketValueUSD: BigNumber;
        maxFundingRate: BigNumber;
        skewScaleUSD: BigNumber;
    }>;
    rebuildCache(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resolver(overrides?: CallOverrides): Promise<string>;
    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;
    setLiquidationBufferRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setLiquidationFeeRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMakerFee(_marketKey: PromiseOrValue<BytesLike>, _makerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxFundingRate(_marketKey: PromiseOrValue<BytesLike>, _maxFundingRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxLeverage(_marketKey: PromiseOrValue<BytesLike>, _maxLeverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinInitialMargin(_minMargin: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinKeeperFee(_sUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setNextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setParameters(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, _makerFee: PromiseOrValue<BigNumberish>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, _maxLeverage: PromiseOrValue<BigNumberish>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, _maxFundingRate: PromiseOrValue<BigNumberish>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSkewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTakerFee(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    skewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    takerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    takerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        isResolverCached(overrides?: CallOverrides): Promise<boolean>;
        liquidationBufferRatio(overrides?: CallOverrides): Promise<BigNumber>;
        liquidationFeeRatio(overrides?: CallOverrides): Promise<BigNumber>;
        makerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        makerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxFundingRate(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxLeverage(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        minInitialMargin(overrides?: CallOverrides): Promise<BigNumber>;
        minKeeperFee(overrides?: CallOverrides): Promise<BigNumber>;
        nextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        parameters(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            takerFee: BigNumber;
            makerFee: BigNumber;
            takerFeeNextPrice: BigNumber;
            makerFeeNextPrice: BigNumber;
            nextPriceConfirmWindow: BigNumber;
            maxLeverage: BigNumber;
            maxMarketValueUSD: BigNumber;
            maxFundingRate: BigNumber;
            skewScaleUSD: BigNumber;
        }>;
        rebuildCache(overrides?: CallOverrides): Promise<void>;
        resolver(overrides?: CallOverrides): Promise<string>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;
        setLiquidationBufferRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setLiquidationFeeRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMakerFee(_marketKey: PromiseOrValue<BytesLike>, _makerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxFundingRate(_marketKey: PromiseOrValue<BytesLike>, _maxFundingRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxLeverage(_marketKey: PromiseOrValue<BytesLike>, _maxLeverage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMaxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinInitialMargin(_minMargin: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMinKeeperFee(_sUSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setNextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setParameters(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, _makerFee: PromiseOrValue<BigNumberish>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, _maxLeverage: PromiseOrValue<BigNumberish>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, _maxFundingRate: PromiseOrValue<BigNumberish>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSkewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTakerFee(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        skewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        takerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        takerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "CacheUpdated(bytes32,address)"(name?: null, destination?: null): CacheUpdatedEventFilter;
        CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;
        "LiquidationBufferRatioUpdated(uint256)"(bps?: null): LiquidationBufferRatioUpdatedEventFilter;
        LiquidationBufferRatioUpdated(bps?: null): LiquidationBufferRatioUpdatedEventFilter;
        "LiquidationFeeRatioUpdated(uint256)"(bps?: null): LiquidationFeeRatioUpdatedEventFilter;
        LiquidationFeeRatioUpdated(bps?: null): LiquidationFeeRatioUpdatedEventFilter;
        "MinInitialMarginUpdated(uint256)"(minMargin?: null): MinInitialMarginUpdatedEventFilter;
        MinInitialMarginUpdated(minMargin?: null): MinInitialMarginUpdatedEventFilter;
        "MinKeeperFeeUpdated(uint256)"(sUSD?: null): MinKeeperFeeUpdatedEventFilter;
        MinKeeperFeeUpdated(sUSD?: null): MinKeeperFeeUpdatedEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "ParameterUpdated(bytes32,bytes32,uint256)"(marketKey?: PromiseOrValue<BytesLike> | null, parameter?: PromiseOrValue<BytesLike> | null, value?: null): ParameterUpdatedEventFilter;
        ParameterUpdated(marketKey?: PromiseOrValue<BytesLike> | null, parameter?: PromiseOrValue<BytesLike> | null, value?: null): ParameterUpdatedEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;
        liquidationBufferRatio(overrides?: CallOverrides): Promise<BigNumber>;
        liquidationFeeRatio(overrides?: CallOverrides): Promise<BigNumber>;
        makerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        makerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxFundingRate(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxLeverage(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        maxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        minInitialMargin(overrides?: CallOverrides): Promise<BigNumber>;
        minKeeperFee(overrides?: CallOverrides): Promise<BigNumber>;
        nextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        parameters(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resolver(overrides?: CallOverrides): Promise<BigNumber>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;
        setLiquidationBufferRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setLiquidationFeeRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMakerFee(_marketKey: PromiseOrValue<BytesLike>, _makerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxFundingRate(_marketKey: PromiseOrValue<BytesLike>, _maxFundingRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxLeverage(_marketKey: PromiseOrValue<BytesLike>, _maxLeverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinInitialMargin(_minMargin: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinKeeperFee(_sUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setNextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setParameters(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, _makerFee: PromiseOrValue<BigNumberish>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, _maxLeverage: PromiseOrValue<BigNumberish>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, _maxFundingRate: PromiseOrValue<BigNumberish>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSkewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTakerFee(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        skewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        takerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        takerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationBufferRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationFeeRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        makerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        makerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxFundingRate(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLeverage(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minInitialMargin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minKeeperFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parameters(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebuildCache(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setLiquidationBufferRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationFeeRatio(_ratio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMakerFee(_marketKey: PromiseOrValue<BytesLike>, _makerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxFundingRate(_marketKey: PromiseOrValue<BytesLike>, _maxFundingRate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxLeverage(_marketKey: PromiseOrValue<BytesLike>, _maxLeverage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxMarketValueUSD(_marketKey: PromiseOrValue<BytesLike>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinInitialMargin(_minMargin: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinKeeperFee(_sUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setNextPriceConfirmWindow(_marketKey: PromiseOrValue<BytesLike>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setParameters(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, _makerFee: PromiseOrValue<BigNumberish>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, _makerFeeNextPrice: PromiseOrValue<BigNumberish>, _nextPriceConfirmWindow: PromiseOrValue<BigNumberish>, _maxLeverage: PromiseOrValue<BigNumberish>, _maxMarketValueUSD: PromiseOrValue<BigNumberish>, _maxFundingRate: PromiseOrValue<BigNumberish>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSkewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, _skewScaleUSD: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTakerFee(_marketKey: PromiseOrValue<BytesLike>, _takerFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTakerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, _takerFeeNextPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        skewScaleUSD(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        takerFee(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        takerFeeNextPrice(_marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
