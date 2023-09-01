<script>
    import '../../../app.css'
</script>

<div class="grid flex-col justify-items-center">
    <h1>Register</h1>

    <form method="post" action="?/signup">
        <div class="form-row">
            <label for="fullName">Full Name<sup><small>*</small></sup></label>
            <input
                id="fullName"
                type="text"
                name="fullName"
                class="input input-bordered w-full max-w-xs"
                required
            />
        </div>

        <div class="form-row">
            <label for="email">Email<sup><small>*</small></sup></label>
            <input
                id="email"
                type="email"
                name="email"
                class="input input-bordered w-full max-w-xs"
                required
            />
        </div>

        <div class="form-row">
            <label for="education">Current Education<sup><small>*</small></sup></label>
            <select name="education" id="education" class="select select-bordered w-full max-w-xs">
                <option value="class8">Class 8</option>
                <option value="class9">Class 9</option>
                <option value="class10">Class 10</option>
                <option value="class11">Class 11</option>
                <option value="class12">Class 12</option>
                <option value="undergraduate">Undergraduate Studies</option>
            </select>
        </div>

        <div class="form-row">
            <label for="institute">Institute Name<sup><small>*</small></sup></label>
            <input
                id="institute"
                type="text"
                name="institute"
                class="input input-bordered w-full max-w-xs"
                required
            />
        </div>

        <div class="form-row">
            <label for="phone">Phone Number<sup><small>*</small></sup></label>
            <input
                id="phone"
                type="number"
                name="phone"
                class="input input-bordered w-full max-w-xs"
                required
            />
        </div>

        <div class="form-row">
            <label for="altEmail">Alternate Email</label>
            <input
                id="altEmail"
                type="email"
                name="altEmail"
                class="input input-bordered w-full max-w-xs"
            />
        </div>

        <div class="form-row">
            <label for="altPhone">Alternate Phone</label>
            <input
                id="altPhone"
                type="number"
                name="altPhone"
                class="input input-bordered w-full max-w-xs"
            />
        </div>

        <div class="form-row">
            <input type="submit" value="Submit" class="btn" />
        </div>
    </form>
</div>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }

    /* Replaced the bottom with tailwind tags, performs better with smaller screens*/
    /* .registrationForm {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } */

    h1 {
        font-size: 2.5rem;
        margin: 15px;
    }

    .form-row {
        margin-bottom: 5px;
        padding: 7px;
    }

    input,
    select {
        height: 40px;
    }
</style>
