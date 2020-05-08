import { fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { SearchRequest, SearchSort } from './index';

export const defaultPageIndex = 0;
export const defaultPageSize = 10;

export function setupPaginator(self) {
    if (self.searchInput) {
        fromEvent(self.searchInput.nativeElement, 'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    self.paginator.pageIndex = 0;
                    loadPage(self);
                })
            )
            .subscribe();
    }

    self.sort.sortChange.subscribe(() => self.paginator.pageIndex = 0);

    merge(self.sort.sortChange, self.paginator.page)
        .pipe(
            tap(() => loadPage(self))
        )
        .subscribe();

}

export function loadPage(self) {
    const sortArray = [];
    sortArray.push({
        direction: self.sort.direction,
        column: self.sort.active
    });

    let filter;
    if (self.searchInput) {
        filter = self.searchInput.nativeElement.value;
    }

    const searchRequest: SearchRequest = {
        sort: sortArray,
        filter,
        pageIndex: self.paginator.pageIndex,
        pageSize: self.paginator.pageSize,
        instanceId: self.instanceId
    };

    self.dataSource.load(searchRequest);
}

export function sortString(input: SearchSort[]): string {
    if (!input) {
        return '';
    }

    let result = '';
    const item = input[0];
    if (!item) {
        return '';
    }
    result += `${item.column},${item.direction}`;

    // input.forEach(item => {
    //     result += `${item.column},`;
    // });
    return result;

}

