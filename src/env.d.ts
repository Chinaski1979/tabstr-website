/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WHATSAPP_PHONE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
