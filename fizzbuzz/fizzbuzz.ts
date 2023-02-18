const Input: HTMLElement | null = document.getElementById("input");
const Output: HTMLElement | null = document.getElementById("output");
const Run: HTMLElement | null = document.getElementById("run");
const divs: ReadonlyArray<[number, string]> = [[ 15, "fizzbuzz" ], [3, "fizz"], [5, "buzz"]];

function fizzbuzz(total: number) {
    let result: Array<string> = [];

    back: for (let i = 1; i <= total; i++) {
        for (let j = 0; j < divs.length; j++) {
            if (i % divs[j][0] == 0) {
                result.push(divs[j][1]);
                continue back;
            }
        }

        result.push(i.toString());
    }

    if (Output != null) {
        Output.innerHTML = result.join('\n');
        Output.setAttribute("rows", total.toString());
    } else {
        console.log(result.join('\n'));
    }
}
