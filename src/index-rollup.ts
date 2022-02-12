import { DesignSystem } from "@microsoft/fast-foundation";
import * as fluentComponents from "./index";

/**
 * Register the Fluent components as dependencies
 */
export const fluentDesignSystem = DesignSystem.getOrCreate()
    .withPrefix("fluent")
    .register(...Object.values(fluentComponents).map(definition => definition()));