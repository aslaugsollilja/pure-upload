interface IUploadOptions {
    url: string | ((file: IUploadFile) => string);
    method: string;
    withCredentials?: boolean;
    headers?: { [key: string]: string | number | boolean };
    params?: { [key: string]: string | number | boolean };    
    localizer?: (message: string, params?: Object) => string;
}
