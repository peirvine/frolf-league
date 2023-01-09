/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayersCreateFormInputValues = {
    Name?: string;
    Rounds?: string[];
};
export declare type PlayersCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Rounds?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayersCreateFormOverridesProps = {
    PlayersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Rounds?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PlayersCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayersCreateFormInputValues) => PlayersCreateFormInputValues;
    onSuccess?: (fields: PlayersCreateFormInputValues) => void;
    onError?: (fields: PlayersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayersCreateFormInputValues) => PlayersCreateFormInputValues;
    onValidate?: PlayersCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayersCreateForm(props: PlayersCreateFormProps): React.ReactElement;
