export enum StatusText {
  UPLOADING = "Uploading file..",
  UPLOADED = "File uploaded successfully",
  SAVING = "Saving file to database",
  GENERATING = "Generating AI embeddings, this wont take long",
}

export type Status = StatusText[keyof StatusText];

export type Message = {
  id?: string;
  role: "human" | "ai" | "placeholder";
  message: string;
  createdAt: Date;
};

export type UserDetails = {
  email: string;
  name: string;
}