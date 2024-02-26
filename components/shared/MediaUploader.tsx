"use client";

import { useToast } from "@/components/ui/use-toast"
import { dataUrl, getImageSize } from "@/lib/utils";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type MediaUploaderProps = {
    onValueChange: (value: string) => void;
    setImage: React.Dispatch<any>;
    publicId: string;
    image: any;
    type: string;
}

const MediaUploader = ({
    onValueChange,
    setImage,
    image,
    publicId,
    type
}: MediaUploaderProps) => {
    const { toast } = useToast()

    const onUploadSuccessHandler = (result: any) => {
        setImage((prevState: any) => ({
            ...prevState,
            publicId: result?.info?.public_id,
            width: result?.info?.width,
            height: result?.info?.height,
            secureURL: result?.info?.secure_url
        }))

        onValueChange(result?.info?.public_id)

        toast({
            title: '图片上传成功!',
            description: '您的账户被扣除了1积分',
            duration: 5000,
            className: 'success-toast'
        })
    }

    const onUploadErrorHandler = () => {
        toast({
            title: '上传时出现了问题...',
            description: '请稍后再试',
            duration: 5000,
            className: 'error-toast'
        })
    }

    return (
        <CldUploadWidget 
            uploadPreset="imagesaas"
            options={{
                multiple: false,
                resourceType: "image",
            }}
            onSuccess={onUploadSuccessHandler}
            onError={onUploadErrorHandler}
        >
            {({ open }) => (
                <div className="flex flex-col gap-4">
                    <h3 className="h3-bold text-dark-600">
                        原图
                    </h3>

                    {publicId ? (
                        <>
                            <div className="cursor-pointer overflow-hidden rounded-[10px]">
                                <CldImage 
                                    width={getImageSize(type, image, "width")}
                                    height={getImageSize(type, image, "height")}
                                    src={publicId}
                                    alt="image"
                                    sizes={"(max-width: 767px) 100vw, 50vw"}
                                    placeholder={dataUrl as PlaceholderValue}
                                    className="media-uploader_cldImage"
                                />
                            </div>
                        </>
                    ): (
                        <div 
                            className="media-uploader_cta" 
                            onClick={() => open()}
                        >
                            <div className="media-uploader_cta-image">
                                <Image 
                                    src="/assets/icons/add.svg"
                                    alt="Add Image"
                                    width={24}
                                    height={24}
                                />
                            </div>
                                <p className="p-14-medium">按此上传图片</p>
                        </div>
                    )}
                </div>
            )}

        </CldUploadWidget>
    )
}

export default MediaUploader