export interface BaseCompositionConfig {
    id?: string;
}

export interface CompositionProps<TConfig> {
    config: TConfig;
}
