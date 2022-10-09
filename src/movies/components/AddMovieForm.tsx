import React, { useState } from 'react';

import { InputField, Button } from 'shared/components';
import { MoviesAction } from 'types';

interface AddMovieFormProps {
  onSubmit: (data: Record<"imageUrl" | "title" | "subtitle" | "description", string>) => void,
  onCancel: () => void,
}

export function AddMovieForm({ onSubmit, onCancel }: AddMovieFormProps) {
  // TODO: Implement form for adding a movie
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const data = {
      imageUrl,
      title,
      subtitle,
      description
    };

    console.log('### handleSubmit', data);
    onSubmit(data);
  }

  return (
    <form className="p-4 ">
      {/* TODO: Add code to make form actions work */}
      <InputField
        name="Url"
        value={imageUrl}
        setter={setImageUrl}
      />
      <InputField
        name="Title"
        value={title}
        setter={setTitle}
      />
      <InputField
        name="Subtitle"
        value={subtitle}
        setter={setSubitle}
      />
      <InputField
        name="Description"
        value={description}
        setter={setDescription}
      />
      <div className="text-center">
        <Button onClick={handleSubmit}>
          Submit
        </Button>
        <Button onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
