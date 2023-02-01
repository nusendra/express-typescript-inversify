import { ProductQuery } from "./queries/product";

export class Resolvers {
  /**
   * getAll
   */
  public getAll(): any {
    return {
      Query: {
        ...ProductQuery,
      },
    };
  }
}
