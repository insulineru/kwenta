import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace PythStructs {
    type PriceStruct = {
        price: PromiseOrValue<BigNumberish>;
        conf: PromiseOrValue<BigNumberish>;
        expo: PromiseOrValue<BigNumberish>;
        publishTime: PromiseOrValue<BigNumberish>;
    };
    type PriceStructOutput = [BigNumber, BigNumber, number, BigNumber] & {
        price: BigNumber;
        conf: BigNumber;
        expo: number;
        publishTime: BigNumber;
    };
    type PriceFeedStruct = {
        id: PromiseOrValue<BytesLike>;
        price: PythStructs.PriceStruct;
        emaPrice: PythStructs.PriceStruct;
    };
    type PriceFeedStructOutput = [
        string,
        PythStructs.PriceStructOutput,
        PythStructs.PriceStructOutput
    ] & {
        id: string;
        price: PythStructs.PriceStructOutput;
        emaPrice: PythStructs.PriceStructOutput;
    };
}
export interface PythInterface extends utils.Interface {
    functions: {
        "getEmaPrice(bytes32)": FunctionFragment;
        "getEmaPriceNoOlderThan(bytes32,uint256)": FunctionFragment;
        "getEmaPriceUnsafe(bytes32)": FunctionFragment;
        "getPrice(bytes32)": FunctionFragment;
        "getPriceNoOlderThan(bytes32,uint256)": FunctionFragment;
        "getPriceUnsafe(bytes32)": FunctionFragment;
        "getUpdateFee(bytes[])": FunctionFragment;
        "getValidTimePeriod()": FunctionFragment;
        "parsePriceFeedUpdates(bytes[],bytes32[],uint64,uint64)": FunctionFragment;
        "updatePriceFeeds(bytes[])": FunctionFragment;
        "updatePriceFeedsIfNecessary(bytes[],bytes32[],uint64[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getEmaPrice" | "getEmaPriceNoOlderThan" | "getEmaPriceUnsafe" | "getPrice" | "getPriceNoOlderThan" | "getPriceUnsafe" | "getUpdateFee" | "getValidTimePeriod" | "parsePriceFeedUpdates" | "updatePriceFeeds" | "updatePriceFeedsIfNecessary"): FunctionFragment;
    encodeFunctionData(functionFragment: "getEmaPrice", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getEmaPriceNoOlderThan", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getEmaPriceUnsafe", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getPrice", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getPriceNoOlderThan", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPriceUnsafe", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getUpdateFee", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "getValidTimePeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "parsePriceFeedUpdates", values: [
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "updatePriceFeeds", values: [PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "updatePriceFeedsIfNecessary", values: [
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    decodeFunctionResult(functionFragment: "getEmaPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEmaPriceNoOlderThan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEmaPriceUnsafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceNoOlderThan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceUnsafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUpdateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getValidTimePeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parsePriceFeedUpdates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePriceFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePriceFeedsIfNecessary", data: BytesLike): Result;
    events: {
        "BatchPriceFeedUpdate(uint16,uint64)": EventFragment;
        "PriceFeedUpdate(bytes32,uint64,int64,uint64)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BatchPriceFeedUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PriceFeedUpdate"): EventFragment;
}
export interface BatchPriceFeedUpdateEventObject {
    chainId: number;
    sequenceNumber: BigNumber;
}
export type BatchPriceFeedUpdateEvent = TypedEvent<[
    number,
    BigNumber
], BatchPriceFeedUpdateEventObject>;
export type BatchPriceFeedUpdateEventFilter = TypedEventFilter<BatchPriceFeedUpdateEvent>;
export interface PriceFeedUpdateEventObject {
    id: string;
    publishTime: BigNumber;
    price: BigNumber;
    conf: BigNumber;
}
export type PriceFeedUpdateEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], PriceFeedUpdateEventObject>;
export type PriceFeedUpdateEventFilter = TypedEventFilter<PriceFeedUpdateEvent>;
export interface Pyth extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PythInterface;
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
        getEmaPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            PythStructs.PriceStructOutput
        ] & {
            price: PythStructs.PriceStructOutput;
        }>;
        getEmaPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            PythStructs.PriceStructOutput
        ] & {
            price: PythStructs.PriceStructOutput;
        }>;
        getEmaPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            PythStructs.PriceStructOutput
        ] & {
            price: PythStructs.PriceStructOutput;
        }>;
        getPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            PythStructs.PriceStructOutput
        ] & {
            price: PythStructs.PriceStructOutput;
        }>;
        getPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            PythStructs.PriceStructOutput
        ] & {
            price: PythStructs.PriceStructOutput;
        }>;
        getPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            PythStructs.PriceStructOutput
        ] & {
            price: PythStructs.PriceStructOutput;
        }>;
        getUpdateFee(updateData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<[BigNumber] & {
            feeAmount: BigNumber;
        }>;
        getValidTimePeriod(overrides?: CallOverrides): Promise<[BigNumber] & {
            validTimePeriod: BigNumber;
        }>;
        parsePriceFeedUpdates(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], minPublishTime: PromiseOrValue<BigNumberish>, maxPublishTime: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updatePriceFeeds(updateData: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updatePriceFeedsIfNecessary(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], publishTimes: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getEmaPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
    getEmaPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
    getEmaPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
    getPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
    getPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
    getPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
    getUpdateFee(updateData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
    getValidTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;
    parsePriceFeedUpdates(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], minPublishTime: PromiseOrValue<BigNumberish>, maxPublishTime: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updatePriceFeeds(updateData: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updatePriceFeedsIfNecessary(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], publishTimes: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getEmaPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
        getEmaPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
        getEmaPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
        getPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
        getPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
        getPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PythStructs.PriceStructOutput>;
        getUpdateFee(updateData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
        getValidTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;
        parsePriceFeedUpdates(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], minPublishTime: PromiseOrValue<BigNumberish>, maxPublishTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PythStructs.PriceFeedStructOutput[]>;
        updatePriceFeeds(updateData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        updatePriceFeedsIfNecessary(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], publishTimes: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BatchPriceFeedUpdate(uint16,uint64)"(chainId?: null, sequenceNumber?: null): BatchPriceFeedUpdateEventFilter;
        BatchPriceFeedUpdate(chainId?: null, sequenceNumber?: null): BatchPriceFeedUpdateEventFilter;
        "PriceFeedUpdate(bytes32,uint64,int64,uint64)"(id?: PromiseOrValue<BytesLike> | null, publishTime?: null, price?: null, conf?: null): PriceFeedUpdateEventFilter;
        PriceFeedUpdate(id?: PromiseOrValue<BytesLike> | null, publishTime?: null, price?: null, conf?: null): PriceFeedUpdateEventFilter;
    };
    estimateGas: {
        getEmaPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getEmaPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getEmaPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getUpdateFee(updateData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<BigNumber>;
        getValidTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;
        parsePriceFeedUpdates(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], minPublishTime: PromiseOrValue<BigNumberish>, maxPublishTime: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updatePriceFeeds(updateData: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updatePriceFeedsIfNecessary(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], publishTimes: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getEmaPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEmaPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEmaPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrice(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceNoOlderThan(id: PromiseOrValue<BytesLike>, age: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceUnsafe(id: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUpdateFee(updateData: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getValidTimePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parsePriceFeedUpdates(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], minPublishTime: PromiseOrValue<BigNumberish>, maxPublishTime: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updatePriceFeeds(updateData: PromiseOrValue<BytesLike>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updatePriceFeedsIfNecessary(updateData: PromiseOrValue<BytesLike>[], priceIds: PromiseOrValue<BytesLike>[], publishTimes: PromiseOrValue<BigNumberish>[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
