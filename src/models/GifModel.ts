export interface Gif {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  user: User;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  title: string;
  alt_text: string;
}

export type User = {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
};

export type CommonImageData = {
  url?: string;
  width: string;
  height: string;
};

export type CommonImageDataWithSizes = {
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
};

export type Images = {
  fixed_height: CommonImageData & CommonImageDataWithSizes;
  fixed_height_still: CommonImageData;
  fixed_height_downsampled: CommonImageData & CommonImageDataWithSizes;
  fixed_width: CommonImageData & CommonImageDataWithSizes;
  fixed_width_still: CommonImageData;
  fixed_width_downsampled: CommonImageData & CommonImageDataWithSizes;
  fixed_height_small: CommonImageData & CommonImageDataWithSizes;
  fixed_height_small_still: CommonImageData;
  fixed_width_small: CommonImageData & CommonImageDataWithSizes;
  fixed_width_small_still: CommonImageData;
  downsized: CommonImageData & {
    url: string;
    size: string;
  };
  downsized_still: CommonImageData;
  downsized_large: CommonImageData & {
    size: string;
  };
  downsized_medium: CommonImageData & {
    size: string;
  };
  downsized_small: CommonImageData & {
    mp4: string;
    mp4_size: string;
  };
  original: CommonImageData &
    CommonImageDataWithSizes & {
      frames: string;
    };
  original_still: CommonImageData;
  looping: {
    mp4: string;
  };
  preview: CommonImageData & {
    mp4: string;
    mp4_size: string;
  };
  preview_gif: CommonImageData;
};
