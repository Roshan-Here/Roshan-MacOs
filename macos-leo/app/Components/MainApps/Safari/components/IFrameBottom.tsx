import { IFrameBottomProps } from "../Type/ManeFrameProps";

  
function IFrameBottom({ url }: IFrameBottomProps) {
    return (
      <div className="w-full h-full">
        <iframe 
          src={url} 
          width="100%" 
          height="600px" 
          allowFullScreen
          title="Website Preview"
        />
      </div>
    );
  }
  
  export default IFrameBottom;