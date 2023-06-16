import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface SynthSwapInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "rescueFunds(address,uint256)": FunctionFragment;
        "swapInto(bytes32,bytes)": FunctionFragment;
        "swapOutOf(bytes32,uint256,bytes)": FunctionFragment;
        "uniswapSwapInto(bytes32,address,uint256,bytes)": FunctionFragment;
        "uniswapSwapOutOf(bytes32,address,uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "nominateNewOwner" | "nominatedOwner" | "owner" | "rescueFunds" | "swapInto" | "swapOutOf" | "uniswapSwapInto" | "uniswapSwapOutOf"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rescueFunds", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "swapInto", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "swapOutOf", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "uniswapSwapInto", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "uniswapSwapOutOf", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapInto", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapOutOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapSwapInto", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapSwapOutOf", data: BytesLike): Result;
    events: {
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "Received(address,uint256)": EventFragment;
        "SwapInto(address,uint256)": EventFragment;
        "SwapOutOf(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SwapInto"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SwapOutOf"): EventFragment;
}
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
export interface ReceivedEventObject {
    from: string;
    amountReceived: BigNumber;
}
export type ReceivedEvent = TypedEvent<[
    string,
    BigNumber
], ReceivedEventObject>;
export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;
export interface SwapIntoEventObject {
    from: string;
    amountReceived: BigNumber;
}
export type SwapIntoEvent = TypedEvent<[
    string,
    BigNumber
], SwapIntoEventObject>;
export type SwapIntoEventFilter = TypedEventFilter<SwapIntoEvent>;
export interface SwapOutOfEventObject {
    from: string;
    amountReceived: BigNumber;
}
export type SwapOutOfEvent = TypedEvent<[
    string,
    BigNumber
], SwapOutOfEventObject>;
export type SwapOutOfEventFilter = TypedEventFilter<SwapOutOfEvent>;
export interface SynthSwap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SynthSwapInterface;
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
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        rescueFunds(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceAmount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uniswapSwapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceTokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        uniswapSwapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _destTokenAddress: PromiseOrValue<string>, _amountOfSynth: PromiseOrValue<BigNumberish>, _expectedAmountOfSUSDFromSwap: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    rescueFunds(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceAmount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uniswapSwapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceTokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    uniswapSwapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _destTokenAddress: PromiseOrValue<string>, _amountOfSynth: PromiseOrValue<BigNumberish>, _expectedAmountOfSUSDFromSwap: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        rescueFunds(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        swapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        swapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceAmount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        uniswapSwapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceTokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        uniswapSwapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _destTokenAddress: PromiseOrValue<string>, _amountOfSynth: PromiseOrValue<BigNumberish>, _expectedAmountOfSUSDFromSwap: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "Received(address,uint256)"(from?: null, amountReceived?: null): ReceivedEventFilter;
        Received(from?: null, amountReceived?: null): ReceivedEventFilter;
        "SwapInto(address,uint256)"(from?: PromiseOrValue<string> | null, amountReceived?: null): SwapIntoEventFilter;
        SwapInto(from?: PromiseOrValue<string> | null, amountReceived?: null): SwapIntoEventFilter;
        "SwapOutOf(address,uint256)"(from?: PromiseOrValue<string> | null, amountReceived?: null): SwapOutOfEventFilter;
        SwapOutOf(from?: PromiseOrValue<string> | null, amountReceived?: null): SwapOutOfEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        rescueFunds(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceAmount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uniswapSwapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceTokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        uniswapSwapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _destTokenAddress: PromiseOrValue<string>, _amountOfSynth: PromiseOrValue<BigNumberish>, _expectedAmountOfSUSDFromSwap: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rescueFunds(token: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceAmount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uniswapSwapInto(_destSynthCurrencyKey: PromiseOrValue<BytesLike>, _sourceTokenAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        uniswapSwapOutOf(_sourceSynthCurrencyKey: PromiseOrValue<BytesLike>, _destTokenAddress: PromiseOrValue<string>, _amountOfSynth: PromiseOrValue<BigNumberish>, _expectedAmountOfSUSDFromSwap: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
