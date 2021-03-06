export declare type Optional<T> = T | null | undefined;
export declare type OptionalOrFalse<T> = Optional<T | false>;
export declare type SingleOrArray<T> = T | T[];
export declare type DeepArray<T> = (T | DeepArray<T>)[];
export declare type SingleOrDeepArray<T> = T | DeepArray<T>;
export declare type Factory<T> = () => T;
export declare type ProductOrFactory<T> = T | Factory<T>;
export declare type ProductOrFactoryDeepArray<T> = (ProductOrFactory<T> | ProductOrFactoryDeepArray<T>)[];
export declare type ProductOrFactoryOrDeepArray<T> = ProductOrFactory<T> | ProductOrFactoryDeepArray<T>;
export declare type Dictionary<TValue> = {
    [key: string]: TValue;
};
export declare type ValueOf<TDictionary> = TDictionary[keyof TDictionary];
export declare type DictionaryOf<TDictionary> = Dictionary<ValueOf<TDictionary>>;
