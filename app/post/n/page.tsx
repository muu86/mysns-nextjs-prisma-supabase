'use client';

import { gql } from '@apollo/client';

export default async function Page() {
  const formActionHandler = () => {
    createPost({
      content: content,
      fileKeys: imageFiles.filter((f) => !!f.s3Key).map((f) => f.s3Key!),
    });
  };
  return (
    <div className="flex flex-col w-full py-4">
      <form action={formActionHandler}>
        {/* 이미지, 미디어 파일 */}
        <div className="w-full mb-4 flex flex-row justify-end gap-2">
          <div className="hover:myhover">
            <label className="w-20 flex flex-col justify-center items-center hover:cursor-pointer">
              <PlusCircleIcon className="w-8" />
              <input
                disabled={uploading}
                className="hidden"
                type="file"
                accept="image/**"
                multiple
                name="files"
                onChange={handleFileInput}
              />
              <span className="text-xs">이미지 추가</span>
            </label>
          </div>
          {/* 저장 */}
          <div className="hover:myhover">
            <button disabled={uploading} type="submit" className="w-20 flex flex-col items-center justify-center">
              <CheckCircleIcon className="w-8" />
              <span className="text-xs">저장</span>
            </button>
          </div>
        </div>
        {imageFiles && (
          <Preview
            imageFiles={imageFiles}
            handleClearPreview={handleClearPreview}
            selectedFileUrl={selectedFileUrl}
            setSelectedFileUrl={setSelectedFileUrl}
          />
        )}
        {/* 텍스트 */}
        <div className="py-3">
          <div className="border rounded-lg has-[:focus]:border-neutral-800">
            <textarea
              name="content"
              className="w-full rounded-lg min-h-56 p-6 resize-none focus:outline-none"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
