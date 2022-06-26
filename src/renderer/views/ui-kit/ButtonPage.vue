<template>
    <div class="p-2 grid grid-cols-2 gap-3">
        <div class="col-span-2">
                <p class="text-gray-400">
                    Button secara default dibungkus dengan style bootstrap. (contoh: .btn .btn-primary, .btn .btn-secondary)
                </p>
        </div>
        <div>
            <div class="mb-2">
                <h1 class="text-lg font-semibold">
                    Default Button
                </h1>
            </div>
            <button class="btn btn-primary">
                Primary
            </button>
            <button class="btn btn-secondary">
                Secondary
            </button>
            <button class="btn btn-success">
                Success
            </button>
            <button class="btn btn-warning">
                Warning
            </button>
            <button class="btn btn-danger">
                Danger
            </button>
        </div>

        <div>
            <h1 class="text-lg font-semibold mb-2">
                Disabled Button
            </h1>
            <button class="btn btn-primary" disabled>
                Primary
            </button>
            <button class="btn btn-secondary" disabled>
                secondary
            </button>
            <button class="btn btn-success" disabled>
                Success
            </button>
            <button class="btn btn-warning" disabled>
                Warning
            </button>
            <button class="btn btn-danger" disabled>
                Danger
            </button>
        </div>

        <div>

            <h1 class="text-lg font-semibold mb-2">
                Button with Sizing
            </h1>

            <button class="btn btn-primary" sm>
                Primary
            </button>
            <button class="btn btn-success" sm>
                Success
            </button>
            <button class="btn btn-warning" sm>
                Warning
            </button>
            <button class="btn btn-danger" sm>
                Danger
            </button>
        </div>

        <div>

            <h1 class="text-lg font-semibold mb-2">
                Button group
            </h1>


            <div btn-group>
                <button class="btn btn-primary">
                    Primary
                </button>
                <button class="btn btn-success">
                    Success
                </button>
                <button class="btn btn-warning">
                    Warning
                </button>
                <button class="btn btn-danger">
                    Danger
                </button>
            </div>
        </div>

        <div>
            <button class="btn btn-primary">
                <svg class="inline animate-spin mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Primary
            </button>
            <button class="btn btn-secondary">
                <svg class="inline animate-spin mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Secondary
            </button>
            <button class="btn btn-warning">
                <svg class="inline animate-spin mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Warning
            </button>
            <button class="btn btn-info">
                <svg class="inline animate-spin mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Info
            </button>
            <button class="btn btn-danger">
                <svg class="inline animate-spin mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Danger
            </button>
        </div>
    </div>
</template>


<style lang="scss">
    button[primary] {
        @apply bg-blue-600 hover:bg-blue-700 py-2 px-3 rounded text-white;
    }
    button[success] {
        @apply bg-green-600 hover:bg-green-700 py-2 px-3 rounded text-white;
    }
    button[warning] {
        @apply bg-yellow-500 hover:bg-yellow-600 py-2 px-3 rounded text-white;
    }
    button[danger] {
        @apply bg-red-500 hover:bg-red-600 py-2 px-3 rounded text-white;
    }

    button {
        @apply mr-2;
        &:last-child {
            @apply mr-0;
        }

        &[sm] {
            @apply px-2 py-1 text-sm;
        }
    }

    [btn-group] {
        display: flex;
        button {
            @apply rounded-none m-0;

            &:first-child {
                @apply rounded-l;
            }

            &:last-child {
                @apply rounded-r;
            }
        }
    }
</style>