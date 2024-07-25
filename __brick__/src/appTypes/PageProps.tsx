import { RootParams } from "@/appTypes/RootProps";

export interface {{pageName.pascalCase()}}PageParamsRoute extends RootParams {
  {{dynamicParamName.snakeCase()}}: string;
}

export interface {{pageName.pascalCase()}}PageParams extends {{pageName.pascalCase()}}PageParamsRoute {
  type: "{{type.snakeCase()}}";
}

export interface {{pageName.pascalCase()}}PageProps {
  params: {{pageName.pascalCase()}}PageParams;
}
