/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Players } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayersUpdateFormInputValues = {
    Name?: string;
    Rounds?: string[];
};
export declare type PlayersUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Rounds?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayersUpdateFormOverridesProps = {
    PlayersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Rounds?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PlayersUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    players?: Players;
    onSubmit?: (fields: PlayersUpdateFormInputValues) => PlayersUpdateFormInputValues;
    onSuccess?: (fields: PlayersUpdateFormInputValues) => void;
    onError?: (fields: PlayersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayersUpdateFormInputValues) => PlayersUpdateFormInputValues;
    onValidate?: PlayersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayersUpdateForm(props: PlayersUpdateFormProps): React.ReactElement;
