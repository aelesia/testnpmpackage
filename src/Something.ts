class some_singleton {
  field = '1'
  test(): string {
    console.log('some_singleton')
    return this.field
  }
}
export default new some_singleton()

export class some_class {
  field: string
  constructor(field: string) {
    this.field = field
  }
  test(): string {
    console.log('some_class')
    return this.field
  }
}

export function some_function(field: string): string {
  console.log('some_function')
  return field
}

export function sj_employees(): string[] {
  return ['th', 'js', 'zk', 'cl', 'jl']
}

export function bnet_id(): string[] {
  return ['alsia', 'bkabite']
}

export function new_function():string {
  return 'new_function'
}
