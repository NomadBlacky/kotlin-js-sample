import kotlin.js.*

/**
 * Created by blacky on 17/06/27.
 */
fun main(args: Array<String>) {
    (1 .. 100).forEach {
        when {
            it % 3 == 0 && it % 5 == 0 ->
                    console.log("FizzBuzz")
            it % 3 == 0 ->
                    console.log("Fizz")
            it % 5 == 0 ->
                    console.log("Buzz")
            else ->
                    console.log(it)
        }
    }
}