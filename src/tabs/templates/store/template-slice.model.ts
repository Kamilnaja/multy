import type { Template } from "~tabs/templates/store/templates.slice";

export interface TemplateState {
  templates: Record<Template["id"], Template>;
}
