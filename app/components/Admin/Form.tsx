'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Work } from '@/app/types/Work';

export function Form({ initialData, mode }: Readonly<{ initialData: Work | null; mode: "create" | "update" }>) {
  const router = useRouter(); 
  const [formData, setFormData] = useState<{
    title: string;
    site_url: string;
    github_url: string;
    tech_stack: string;
    description: string;
    screenshot: File;
    is_published: boolean;
    released_on: string;
    screeshot_image_base64: string;
  }>({
    title: '',
    site_url: '',
    github_url: '',
    tech_stack: '',
    description: '',
    screenshot: new File([], 'screenshot.png'),
    is_published: false,
    released_on: '',
    screeshot_image_base64: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        title: initialData.title,
        site_url: initialData.site_url,
        github_url: initialData.github_url,
        tech_stack: initialData.tech_stack,
        description: initialData.description,
        screenshot: new File([], 'screenshot.png'),
        is_published: initialData.is_published,
        released_on: initialData.released_on,
      }));
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        screenshot: e.target.files[0],
      });
      setErrors({
        ...errors,
        screenshot: '', // ファイルが選択されたらエラーメッセージをクリア
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!formData.title) newErrors.title = "この項目は必須です";
    if (!formData.site_url) newErrors.site_url = "この項目は必須です";
    if (!formData.github_url) newErrors.github_url = "この項目は必須です";
    if (!formData.tech_stack) newErrors.tech_stack = "この項目は必須です";
    if (!formData.description) newErrors.description = "この項目は必須です";
    if (!formData.screenshot || formData.screenshot.size === 0) newErrors.screenshot = "この項目は必須です";
    if (!formData.released_on) newErrors.released_on = "この項目は必須です";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (!formData.screenshot || formData.screenshot.size === 0) {
      alert("スクリーンショットファイルが選択されていません");
      return;
    }

      const reader = new FileReader();
      reader.readAsDataURL(formData.screenshot);
    
      reader.onloadend = async () => {
        const base64data = reader.result as string;

        const url = mode === "create" ? "/api/works/createWork" : `/api/works/updateWork`;
        const result = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            screenshot_image_base64: base64data,
            ...(mode === "update" && initialData?.id ? { id: initialData.id } : {}),
          }),
        });
    
        if (!result.ok) {
          alert(`${mode === "create" ? "作成" : "更新"}に失敗しました: ${result.status}`);
          return;
        }

        const data = await result.json();
        if (data.status !== "success") {
          alert(`${mode === "create" ? "作成" : "更新"}に失敗しました`);
        }

        alert(`${mode === "create" ? "作成" : "更新"}に成功しました`);
        router.push('/admin/list');
      };
  };

  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10">Work Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-4/5 mx-auto">
        {/* Title */}
        <div className="flex flex-col items-start m-5">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="bg-white rounded-md p-2 w-full text-black" />
          {errors.title && <span className="text-red-500">{errors.title}</span>}
        </div>

        {/* Site URL */}
        <div className="flex flex-col items-start m-5">
          <label htmlFor="site_url">Site URL</label>
          <input type="text" name="site_url" value={formData.site_url} onChange={handleChange} className="bg-white rounded-md p-2 w-full text-black" />
          {errors.site_url && <span className="text-red-500">{errors.site_url}</span>}
        </div>

        {/* Github URL */}
        <div className="flex flex-col items-start m-5">
          <label htmlFor="github_url">Github URL</label>
          <input type="text" name="github_url" value={formData.github_url} onChange={handleChange} className="bg-white rounded-md p-2 w-full text-black" />
          {errors.github_url && <span className="text-red-500">{errors.github_url}</span>}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col items-start m-5">
          <label htmlFor="tech_stack">Tech Stack</label>
          <textarea name="tech_stack" value={formData.tech_stack} onChange={handleChange} className="bg-white rounded-md p-2 w-full text-black" />
          {errors.tech_stack && <span className="text-red-500">{errors.tech_stack}</span>}
        </div>

        {/* Description */}
        <div className="flex flex-col items-start m-5">
          <label htmlFor="description">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="bg-white rounded-md p-2 w-full text-black" />
          {errors.description && <span className="text-red-500">{errors.description}</span>}
        </div>

        {/* Screenshot */}
        <div className="flex flex-col items-start m-5">
          <label htmlFor="screenshot">Screenshot</label>
          <input type="file" name="screenshot" onChange={handleFileChange} className="bg-white rounded-md p-2 w-full text-black" />
          {errors.screenshot && <span className="text-red-500">{errors.screenshot}</span>}
        </div>

        {/* Released On */}
        <div className="flex flex-col items-start m-5">
          <label htmlFor="released_on">Released On</label>
          <input type="date" name="released_on" value={formData.released_on} onChange={handleChange} className="bg-white rounded-md p-2 w-full text-black" />
          {errors.released_on && <span className="text-red-500">{errors.released_on}</span>}
        </div>

        {/* Publish */}
        <div className="flex items-center m-5">
          <label htmlFor="is_published" className="flex items-center cursor-pointer">
            <span className={`mr-3 font-semibold text-white`}>
              Publish
            </span>
            <div className="relative">
              <input
                id="is_published"
                type="checkbox"
                name="is_published"
                checked={formData.is_published}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${formData.is_published ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
                  formData.is_published ? 'translate-x-6' : ''
                }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer mb-15 p-3 w-70 bg-gray-900 text-white font-bold rounded-full mx-auto mt-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
