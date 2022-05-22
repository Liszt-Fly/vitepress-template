export function test() {
    console.log(import.meta.globEager("../components/*.vue"))
}