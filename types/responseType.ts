export interface ApiResponse<T, E = Record<string, any>> {
    statusCode: number;
    success: boolean;
    data: T;
    error: E;
    message: string;
}