import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace IMultipleMerkleDistributor {
    type ClaimsStruct = {
        index: PromiseOrValue<BigNumberish>;
        account: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
        merkleProof: PromiseOrValue<BytesLike>[];
        epoch: PromiseOrValue<BigNumberish>;
    };
    type ClaimsStructOutput = [
        BigNumber,
        string,
        BigNumber,
        string[],
        BigNumber
    ] & {
        index: BigNumber;
        account: string;
        amount: BigNumber;
        merkleProof: string[];
        epoch: BigNumber;
    };
}
export interface MultipleMerkleDistributorOpInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "claim(uint256,address,uint256,bytes32[],uint256)": FunctionFragment;
        "claimMultiple((uint256,address,uint256,bytes32[],uint256)[])": FunctionFragment;
        "isClaimed(uint256,uint256)": FunctionFragment;
        "merkleRoots(uint256)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "setMerkleRootForEpoch(bytes32,uint256)": FunctionFragment;
        "token()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "claim" | "claimMultiple" | "isClaimed" | "merkleRoots" | "nominateNewOwner" | "nominatedOwner" | "owner" | "setMerkleRootForEpoch" | "token"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "claim", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "claimMultiple", values: [IMultipleMerkleDistributor.ClaimsStruct[]]): string;
    encodeFunctionData(functionFragment: "isClaimed", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "merkleRoots", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMerkleRootForEpoch", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimMultiple", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merkleRoots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMerkleRootForEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    events: {
        "Claimed(uint256,address,uint256,uint256)": EventFragment;
        "MerkleRootModified(uint256)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MerkleRootModified"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
}
export interface ClaimedEventObject {
    index: BigNumber;
    account: string;
    amount: BigNumber;
    epoch: BigNumber;
}
export type ClaimedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber
], ClaimedEventObject>;
export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;
export interface MerkleRootModifiedEventObject {
    epoch: BigNumber;
}
export type MerkleRootModifiedEvent = TypedEvent<[
    BigNumber
], MerkleRootModifiedEventObject>;
export type MerkleRootModifiedEventFilter = TypedEventFilter<MerkleRootModifiedEvent>;
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
export interface MultipleMerkleDistributorOp extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MultipleMerkleDistributorOpInterface;
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
        claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        claimMultiple(claims: IMultipleMerkleDistributor.ClaimsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isClaimed(index: PromiseOrValue<BigNumberish>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        merkleRoots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        setMerkleRootForEpoch(merkleRoot: PromiseOrValue<BytesLike>, epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    claimMultiple(claims: IMultipleMerkleDistributor.ClaimsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isClaimed(index: PromiseOrValue<BigNumberish>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    merkleRoots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    setMerkleRootForEpoch(merkleRoot: PromiseOrValue<BytesLike>, epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        claimMultiple(claims: IMultipleMerkleDistributor.ClaimsStruct[], overrides?: CallOverrides): Promise<void>;
        isClaimed(index: PromiseOrValue<BigNumberish>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        merkleRoots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        setMerkleRootForEpoch(merkleRoot: PromiseOrValue<BytesLike>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Claimed(uint256,address,uint256,uint256)"(index?: null, account?: null, amount?: null, epoch?: null): ClaimedEventFilter;
        Claimed(index?: null, account?: null, amount?: null, epoch?: null): ClaimedEventFilter;
        "MerkleRootModified(uint256)"(epoch?: null): MerkleRootModifiedEventFilter;
        MerkleRootModified(epoch?: null): MerkleRootModifiedEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        claimMultiple(claims: IMultipleMerkleDistributor.ClaimsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isClaimed(index: PromiseOrValue<BigNumberish>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        merkleRoots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        setMerkleRootForEpoch(merkleRoot: PromiseOrValue<BytesLike>, epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claim(index: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, merkleProof: PromiseOrValue<BytesLike>[], epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        claimMultiple(claims: IMultipleMerkleDistributor.ClaimsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isClaimed(index: PromiseOrValue<BigNumberish>, epoch: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        merkleRoots(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMerkleRootForEpoch(merkleRoot: PromiseOrValue<BytesLike>, epoch: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
