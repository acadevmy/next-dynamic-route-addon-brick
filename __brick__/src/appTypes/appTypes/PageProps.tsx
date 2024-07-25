import { RootParams } from "@/appTypes/rootProps";

export interface {{pageName.pascalCase()}}PageParamsRoute extends RootParams {
  {{dynamicParamName.snakeCase()}}: string;
}

export interface {{pageName.pascalCase()}}PageParams extends {{pageName.pascalCase()}}PageParamsRoute {
  type: "{{type.snakeCase()}}";
}

export interface {{pageName.pascalCase()}}PageProps {
  params: {{pageName.pascalCase()}}PageParams;
}

export type PagesParams = {{pageName.pascalCase()}}PageParams;

export type SearchParams = Record<string, string> | undefined;