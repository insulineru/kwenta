import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace FuturesMarketData {
    type FeeRatesStruct = {
        takerFee: PromiseOrValue<BigNumberish>;
        makerFee: PromiseOrValue<BigNumberish>;
        takerFeeNextPrice: PromiseOrValue<BigNumberish>;
        makerFeeNextPrice: PromiseOrValue<BigNumberish>;
    };
    type FeeRatesStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        takerFee: BigNumber;
        makerFee: BigNumber;
        takerFeeNextPrice: BigNumber;
        makerFeeNextPrice: BigNumber;
    };
    type MarketSummaryStruct = {
        market: PromiseOrValue<string>;
        asset: PromiseOrValue<BytesLike>;
        key: PromiseOrValue<BytesLike>;
        maxLeverage: PromiseOrValue<BigNumberish>;
        price: PromiseOrValue<BigNumberish>;
        marketSize: PromiseOrValue<BigNumberish>;
        marketSkew: PromiseOrValue<BigNumberish>;
        marketDebt: PromiseOrValue<BigNumberish>;
        currentFundingRate: PromiseOrValue<BigNumberish>;
        feeRates: FuturesMarketData.FeeRatesStruct;
    };
    type MarketSummaryStructOutput = [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        FuturesMarketData.FeeRatesStructOutput
    ] & {
        market: string;
        asset: string;
        key: string;
        maxLeverage: BigNumber;
        price: BigNumber;
        marketSize: BigNumber;
        marketSkew: BigNumber;
        marketDebt: BigNumber;
        currentFundingRate: BigNumber;
        feeRates: FuturesMarketData.FeeRatesStructOutput;
    };
    type FuturesGlobalsStruct = {
        minInitialMargin: PromiseOrValue<BigNumberish>;
        liquidationFeeRatio: PromiseOrValue<BigNumberish>;
        liquidationBufferRatio: PromiseOrValue<BigNumberish>;
        minKeeperFee: PromiseOrValue<BigNumberish>;
    };
    type FuturesGlobalsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        minInitialMargin: BigNumber;
        liquidationFeeRatio: BigNumber;
        liquidationBufferRatio: BigNumber;
        minKeeperFee: BigNumber;
    };
    type MarketLimitsStruct = {
        maxLeverage: PromiseOrValue<BigNumberish>;
        maxMarketValueUSD: PromiseOrValue<BigNumberish>;
    };
    type MarketLimitsStructOutput = [BigNumber, BigNumber] & {
        maxLeverage: BigNumber;
        maxMarketValueUSD: BigNumber;
    };
    type FundingParametersStruct = {
        maxFundingRate: PromiseOrValue<BigNumberish>;
        skewScaleUSD: PromiseOrValue<BigNumberish>;
    };
    type FundingParametersStructOutput = [BigNumber, BigNumber] & {
        maxFundingRate: BigNumber;
        skewScaleUSD: BigNumber;
    };
    type SidesStruct = {
        long: PromiseOrValue<BigNumberish>;
        short: PromiseOrValue<BigNumberish>;
    };
    type SidesStructOutput = [BigNumber, BigNumber] & {
        long: BigNumber;
        short: BigNumber;
    };
    type MarketSizeDetailsStruct = {
        marketSize: PromiseOrValue<BigNumberish>;
        sides: FuturesMarketData.SidesStruct;
        marketDebt: PromiseOrValue<BigNumberish>;
        marketSkew: PromiseOrValue<BigNumberish>;
    };
    type MarketSizeDetailsStructOutput = [
        BigNumber,
        FuturesMarketData.SidesStructOutput,
        BigNumber,
        BigNumber
    ] & {
        marketSize: BigNumber;
        sides: FuturesMarketData.SidesStructOutput;
        marketDebt: BigNumber;
        marketSkew: BigNumber;
    };
    type PriceDetailsStruct = {
        price: PromiseOrValue<BigNumberish>;
        invalid: PromiseOrValue<boolean>;
    };
    type PriceDetailsStructOutput = [BigNumber, boolean] & {
        price: BigNumber;
        invalid: boolean;
    };
    type MarketDataStruct = {
        market: PromiseOrValue<string>;
        baseAsset: PromiseOrValue<BytesLike>;
        marketKey: PromiseOrValue<BytesLike>;
        feeRates: FuturesMarketData.FeeRatesStruct;
        limits: FuturesMarketData.MarketLimitsStruct;
        fundingParameters: FuturesMarketData.FundingParametersStruct;
        marketSizeDetails: FuturesMarketData.MarketSizeDetailsStruct;
        priceDetails: FuturesMarketData.PriceDetailsStruct;
    };
    type MarketDataStructOutput = [
        string,
        string,
        string,
        FuturesMarketData.FeeRatesStructOutput,
        FuturesMarketData.MarketLimitsStructOutput,
        FuturesMarketData.FundingParametersStructOutput,
        FuturesMarketData.MarketSizeDetailsStructOutput,
        FuturesMarketData.PriceDetailsStructOutput
    ] & {
        market: string;
        baseAsset: string;
        marketKey: string;
        feeRates: FuturesMarketData.FeeRatesStructOutput;
        limits: FuturesMarketData.MarketLimitsStructOutput;
        fundingParameters: FuturesMarketData.FundingParametersStructOutput;
        marketSizeDetails: FuturesMarketData.MarketSizeDetailsStructOutput;
        priceDetails: FuturesMarketData.PriceDetailsStructOutput;
    };
    type PositionDataStruct = {
        position: IFuturesMarketBaseTypes.PositionStruct;
        notionalValue: PromiseOrValue<BigNumberish>;
        profitLoss: PromiseOrValue<BigNumberish>;
        accruedFunding: PromiseOrValue<BigNumberish>;
        remainingMargin: PromiseOrValue<BigNumberish>;
        accessibleMargin: PromiseOrValue<BigNumberish>;
        liquidationPrice: PromiseOrValue<BigNumberish>;
        canLiquidatePosition: PromiseOrValue<boolean>;
    };
    type PositionDataStructOutput = [
        IFuturesMarketBaseTypes.PositionStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        position: IFuturesMarketBaseTypes.PositionStructOutput;
        notionalValue: BigNumber;
        profitLoss: BigNumber;
        accruedFunding: BigNumber;
        remainingMargin: BigNumber;
        accessibleMargin: BigNumber;
        liquidationPrice: BigNumber;
        canLiquidatePosition: boolean;
    };
}
export declare namespace IFuturesMarketSettings {
    type ParametersStruct = {
        takerFee: PromiseOrValue<BigNumberish>;
        makerFee: PromiseOrValue<BigNumberish>;
        takerFeeNextPrice: PromiseOrValue<BigNumberish>;
        makerFeeNextPrice: PromiseOrValue<BigNumberish>;
        nextPriceConfirmWindow: PromiseOrValue<BigNumberish>;
        maxLeverage: PromiseOrValue<BigNumberish>;
        maxMarketValueUSD: PromiseOrValue<BigNumberish>;
        maxFundingRate: PromiseOrValue<BigNumberish>;
        skewScaleUSD: PromiseOrValue<BigNumberish>;
    };
    type ParametersStructOutput = [
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
    };
}
export declare namespace IFuturesMarketBaseTypes {
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
export interface FuturesMarketDataInterface extends utils.Interface {
    functions: {
        "allMarketSummaries()": FunctionFragment;
        "globals()": FunctionFragment;
        "marketDetails(address)": FunctionFragment;
        "marketDetailsForKey(bytes32)": FunctionFragment;
        "marketSummaries(address[])": FunctionFragment;
        "marketSummariesForKeys(bytes32[])": FunctionFragment;
        "parameters(bytes32)": FunctionFragment;
        "positionDetails(address,address)": FunctionFragment;
        "positionDetailsForMarketKey(bytes32,address)": FunctionFragment;
        "resolverProxy()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allMarketSummaries" | "globals" | "marketDetails" | "marketDetailsForKey" | "marketSummaries" | "marketSummariesForKeys" | "parameters" | "positionDetails" | "positionDetailsForMarketKey" | "resolverProxy"): FunctionFragment;
    encodeFunctionData(functionFragment: "allMarketSummaries", values?: undefined): string;
    encodeFunctionData(functionFragment: "globals", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketDetails", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "marketDetailsForKey", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "marketSummaries", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "marketSummariesForKeys", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "parameters", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "positionDetails", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "positionDetailsForMarketKey", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "resolverProxy", values?: undefined): string;
    decodeFunctionResult(functionFragment: "allMarketSummaries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "globals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketDetailsForKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketSummaries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketSummariesForKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionDetailsForMarketKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolverProxy", data: BytesLike): Result;
    events: {};
}
export interface FuturesMarketData extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FuturesMarketDataInterface;
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
        allMarketSummaries(overrides?: CallOverrides): Promise<[FuturesMarketData.MarketSummaryStructOutput[]]>;
        globals(overrides?: CallOverrides): Promise<[FuturesMarketData.FuturesGlobalsStructOutput]>;
        marketDetails(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[FuturesMarketData.MarketDataStructOutput]>;
        marketDetailsForKey(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[FuturesMarketData.MarketDataStructOutput]>;
        marketSummaries(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[FuturesMarketData.MarketSummaryStructOutput[]]>;
        marketSummariesForKeys(marketKeys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[FuturesMarketData.MarketSummaryStructOutput[]]>;
        parameters(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[IFuturesMarketSettings.ParametersStructOutput]>;
        positionDetails(market: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[FuturesMarketData.PositionDataStructOutput]>;
        positionDetailsForMarketKey(marketKey: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[FuturesMarketData.PositionDataStructOutput]>;
        resolverProxy(overrides?: CallOverrides): Promise<[string]>;
    };
    allMarketSummaries(overrides?: CallOverrides): Promise<FuturesMarketData.MarketSummaryStructOutput[]>;
    globals(overrides?: CallOverrides): Promise<FuturesMarketData.FuturesGlobalsStructOutput>;
    marketDetails(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<FuturesMarketData.MarketDataStructOutput>;
    marketDetailsForKey(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<FuturesMarketData.MarketDataStructOutput>;
    marketSummaries(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<FuturesMarketData.MarketSummaryStructOutput[]>;
    marketSummariesForKeys(marketKeys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<FuturesMarketData.MarketSummaryStructOutput[]>;
    parameters(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IFuturesMarketSettings.ParametersStructOutput>;
    positionDetails(market: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<FuturesMarketData.PositionDataStructOutput>;
    positionDetailsForMarketKey(marketKey: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<FuturesMarketData.PositionDataStructOutput>;
    resolverProxy(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        allMarketSummaries(overrides?: CallOverrides): Promise<FuturesMarketData.MarketSummaryStructOutput[]>;
        globals(overrides?: CallOverrides): Promise<FuturesMarketData.FuturesGlobalsStructOutput>;
        marketDetails(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<FuturesMarketData.MarketDataStructOutput>;
        marketDetailsForKey(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<FuturesMarketData.MarketDataStructOutput>;
        marketSummaries(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<FuturesMarketData.MarketSummaryStructOutput[]>;
        marketSummariesForKeys(marketKeys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<FuturesMarketData.MarketSummaryStructOutput[]>;
        parameters(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IFuturesMarketSettings.ParametersStructOutput>;
        positionDetails(market: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<FuturesMarketData.PositionDataStructOutput>;
        positionDetailsForMarketKey(marketKey: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<FuturesMarketData.PositionDataStructOutput>;
        resolverProxy(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        allMarketSummaries(overrides?: CallOverrides): Promise<BigNumber>;
        globals(overrides?: CallOverrides): Promise<BigNumber>;
        marketDetails(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        marketDetailsForKey(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        marketSummaries(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        marketSummariesForKeys(marketKeys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
        parameters(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        positionDetails(market: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        positionDetailsForMarketKey(marketKey: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        resolverProxy(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        allMarketSummaries(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        globals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketDetails(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketDetailsForKey(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketSummaries(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketSummariesForKeys(marketKeys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parameters(marketKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionDetails(market: PromiseOrValue<string>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionDetailsForMarketKey(marketKey: PromiseOrValue<BytesLike>, account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolverProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
