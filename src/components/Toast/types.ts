export type ToastTypes = "success" | "warning" | "error"

export interface ToastProps {
    title?: string;
    type?: ToastTypes;
}

export type ToastStyleProps = Required<Pick<ToastProps, "type">>