import type { Template } from "~tabs/templates/templates.slice";

export interface TemplateState {
  templates: Record<Template["id"], Template>;
}
