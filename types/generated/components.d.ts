import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'slideshow';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface UiComponentsBlockquote extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_blockquotes';
  info: {
    displayName: 'blockquote';
    icon: 'underline';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiComponentsPdf extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_pdfs';
  info: {
    displayName: 'PDF';
    icon: 'filePdf';
  };
  attributes: {
    pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface UiComponentsText extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_texts';
  info: {
    displayName: 'Text';
    icon: 'pencil';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface UiComponentsVideo extends Struct.ComponentSchema {
  collectionName: 'components_ui_components_videos';
  info: {
    displayName: 'Video';
    icon: 'television';
  };
  attributes: {
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'ui-components.blockquote': UiComponentsBlockquote;
      'ui-components.pdf': UiComponentsPdf;
      'ui-components.text': UiComponentsText;
      'ui-components.video': UiComponentsVideo;
    }
  }
}
