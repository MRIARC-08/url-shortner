export declare class URLrepository {
    static createShortURL(data: {
        url: string;
        shortCode: string | null;
    }): Promise<string | null>;
    static getURL(shortCode: string): Promise<{
        shortCode: string | null;
        url: string;
        count: number;
        id: number;
    } | null>;
}
//# sourceMappingURL=URL.repository.d.ts.map