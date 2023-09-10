# algo prime

export default function bs_list(haystack: number[], needle: number): boolean {
let lo = 0;
let hi = haystack.length;
do {
const m = Math.floor(lo + (hi - lo) / 2);
const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);

    return false;

}

export default function linear_search(
haystack: number[],
needle: number,
): boolean {
for (let i = 0; i < haystack.length; ++i) {
if (haystack[i] === needle) {
return true;
}
}
return false;
}
