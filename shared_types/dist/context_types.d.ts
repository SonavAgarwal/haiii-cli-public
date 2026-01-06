export type CursorPosition = {
    line: number;
    character: number;
};
export type SelectedText = {
    startLine: number;
    endLine: number;
    text: string;
};
export type OpenFileInfo = {
    path: string;
    isActive: boolean;
    timestamp: number;
    cursor?: CursorPosition;
    selection?: SelectedText;
    fullText?: string;
    visibleLineRange?: {
        startLine: number;
        endLine: number;
    };
    visibleText?: {
        startLine: number;
        lines: string[];
    };
};
export type IdeContextPayload = {
    workspaceState: {
        isTrusted: boolean;
        openFiles: OpenFileInfo[];
        workspaceFiles: string[];
    };
};
