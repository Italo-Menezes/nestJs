export class Content {
    private readonly content: string;

  get valeu(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isvalid = this.validateContentLength(content);
    
    if(!isvalid) {
      throw new Error('Content must be between 5 and 240 characters');
    }

    
      this.content = content;
  }

}
