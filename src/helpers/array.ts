export function getFilledArray<
	T extends (v: number, k: number) => unknown,
	Y extends ReturnType<T>
>(range: number, mapfn: T): Y[] {
	return range <= 0 ? [] : (Array.from({ length: range }, mapfn) as Y[])
}

export function updateIndex<T extends unknown[]>(
	array: T,
	indexItem: number,
	item: T[keyof T]
): T {
	return array.map((chipItem, index) => {
		return indexItem === index ? item : chipItem
	}) as T
}

export function joinArrayStrings(array: readonly string[]): string {
	return array.join('')
}

export function append<T extends unknown[]>(array: T, item: T[keyof T]): T {
	return [...array, item] as T
}

export function mergeArrayStringFromIndex(
	array: readonly string[],
	arrayToMerge: readonly string[],
	fromIndex: number
): string[] {
	return array.reduce(
		(obj, currentValue, idx) => {
			const { characters, restArrayMerged } = obj
			if (idx < fromIndex) {
				return {
					restArrayMerged,
					characters: append(characters, currentValue)
				}
			}

			const [firstCharacter, ...restArrayWithoutFirstCharacter] =
				restArrayMerged
			return {
				restArrayMerged: restArrayWithoutFirstCharacter,
				characters: append(characters, firstCharacter || '')
			}
		},
		{
			restArrayMerged: arrayToMerge,
			characters: [] as string[]
		}
	).characters
}
